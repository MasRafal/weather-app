import React, { useState, useEffect, useMemo, useCallback, useReducer } from 'react';
import { useParams, Link } from 'react-router-dom';
import WeatherIcon from '../components/WeatherIcon';
import WeatherDetail from '../components/WeatherDetail';
import ForecastDay from '../components/ForecastDay';
import FavoriteButton from '../components/FavoriteButton';
import { useTemperature } from '../hooks/useTemperature';
import { getCityWeather } from '../data/weatherData';
import './CityDetail.css';

// Reducer do zarządzania stanem widoku
const viewReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, activeView: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_DATA':
      return { ...state, cityData: action.payload, isLoading: false };
    default:
      return state;
  }
};

const initialState = {
  activeView: 'current', // 'current' lub 'forecast'
  isLoading: true,
  cityData: null
};

const CityDetail = () => {
  const { cityId } = useParams();
  const { convertTemperature, unitSymbol } = useTemperature();
  const [state, dispatch] = useReducer(viewReducer, initialState);
  const [selectedDay, setSelectedDay] = useState(0);

  // useEffect do pobrania danych miasta
  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Symulacja pobierania danych (można tu dodać prawdziwe API)
    const timer = setTimeout(() => {
      const data = getCityWeather(cityId);
      dispatch({ type: 'SET_DATA', payload: data });
    }, 300);

    return () => clearTimeout(timer);
  }, [cityId]);

  // useCallback dla zmiany widoku
  const handleViewChange = useCallback((view) => {
    dispatch({ type: 'SET_VIEW', payload: view });
  }, []);

  // useCallback dla wyboru dnia prognozy
  const handleDaySelect = useCallback((index) => {
    setSelectedDay(index);
  }, []);

  // useMemo do przygotowania danych o opadach
  const precipitationInfo = useMemo(() => {
    if (!state.cityData) return null;
    
    const { precipitation } = state.cityData.current;
    const typeText = {
      'rain': 'deszcz',
      'snow': 'śnieg',
      'none': 'brak'
    };
    
    return {
      probability: precipitation.probability,
      type: typeText[precipitation.type] || 'brak',
      amount: precipitation.amount
    };
  }, [state.cityData]);

  if (state.isLoading) {
    return (
      <div className="city-detail__loading">
        <div className="city-detail__spinner"></div>
        <p>Ładowanie danych pogodowych...</p>
      </div>
    );
  }

  if (!state.cityData) {
    return (
      <div className="city-detail__not-found">
        <h2>Miasto nie znalezione</h2>
        <p>Nie znaleziono danych dla podanego miasta.</p>
        <Link to="/" className="city-detail__back-btn">
          ← Powrót do listy miast
        </Link>
      </div>
    );
  }

  const { name, country, current, forecast } = state.cityData;

  return (
    <div className="city-detail">
      <div className="city-detail__hero">
        <div className="city-detail__hero-content">
          <Link to="/" className="city-detail__back-link">
            ← Powrót
          </Link>
          
          <div className="city-detail__header">
            <div className="city-detail__location">
              <h1 className="city-detail__city">{name}</h1>
              <span className="city-detail__country">{country}</span>
            </div>
            <FavoriteButton cityId={cityId} size="large" />
          </div>

          <div className="city-detail__current">
            <WeatherIcon condition={current.condition} size="large" />
            <div className="city-detail__temp-main">
              <span className="city-detail__temperature">
                {convertTemperature(current.temperature)}{unitSymbol}
              </span>
              <span className="city-detail__condition-text">
                {current.conditionText}
              </span>
            </div>
          </div>

          <div className="city-detail__view-toggle">
            <button
              className={`city-detail__toggle-btn ${state.activeView === 'current' ? 'active' : ''}`}
              onClick={() => handleViewChange('current')}
            >
              Teraz
            </button>
            <button
              className={`city-detail__toggle-btn ${state.activeView === 'forecast' ? 'active' : ''}`}
              onClick={() => handleViewChange('forecast')}
            >
              Prognoza 5 dni
            </button>
          </div>
        </div>
      </div>

      <div className="city-detail__content">
        {state.activeView === 'current' ? (
          <div className="city-detail__current-details">
            <h2 className="city-detail__section-title">Szczegóły pogody</h2>
            <div className="city-detail__details-grid">
              <WeatherDetail
                icon="💧"
                label="Opady"
                value={`${precipitationInfo.probability}%`}
                subValue={precipitationInfo.amount > 0 
                  ? `${precipitationInfo.amount} mm (${precipitationInfo.type})` 
                  : precipitationInfo.type}
              />
              <WeatherDetail
                icon="💨"
                label="Wiatr"
                value={`${current.windSpeed} km/h`}
                subValue={`Kierunek: ${current.windDirection}`}
              />
              <WeatherDetail
                icon="☁️"
                label="Zachmurzenie"
                value={`${current.cloudCover}%`}
              />
              <WeatherDetail
                icon="💦"
                label="Wilgotność"
                value={`${current.humidity}%`}
              />
            </div>
          </div>
        ) : (
          <div className="city-detail__forecast">
            <h2 className="city-detail__section-title">Prognoza na 5 dni</h2>
            
            {/* Przyciski wyboru dnia */}
            <div className="city-detail__day-selector">
              {forecast.map((day, index) => (
                <button
                  key={index}
                  className={`city-detail__day-btn ${selectedDay === index ? 'active' : ''}`}
                  onClick={() => handleDaySelect(index)}
                >
                  <span className="city-detail__day-btn-name">{day.day.substring(0, 3)}</span>
                  <span className="city-detail__day-btn-date">{day.date}</span>
                </button>
              ))}
            </div>

            {/* Szczegóły wybranego dnia */}
            <div className="city-detail__selected-day">
              <ForecastDay forecast={forecast[selectedDay]} />
            </div>

            {/* Przegląd wszystkich dni */}
            <div className="city-detail__forecast-grid">
              {forecast.map((day, index) => (
                <ForecastDay key={index} forecast={day} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityDetail;
