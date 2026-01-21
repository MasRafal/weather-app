import React from 'react';
import WeatherIcon from './WeatherIcon';
import { useTemperature } from '../hooks/useTemperature';
import './ForecastDay.css';

const ForecastDay = ({ forecast }) => {
  const { convertTemperature, unitSymbol } = useTemperature();

  const getPrecipitationTypeText = (type) => {
    switch (type) {
      case 'rain': return 'deszcz';
      case 'snow': return 'śnieg';
      default: return 'brak';
    }
  };

  return (
    <div className="forecast-day">
      <div className="forecast-day__header">
        <span className="forecast-day__name">{forecast.day}</span>
        <span className="forecast-day__date">{forecast.date}</span>
      </div>
      
      <div className="forecast-day__main">
        <WeatherIcon condition={forecast.condition} size="small" />
        <div className="forecast-day__temps">
          <span className="forecast-day__temp-max">
            {convertTemperature(forecast.tempMax)}{unitSymbol}
          </span>
          <span className="forecast-day__temp-min">
            {convertTemperature(forecast.tempMin)}{unitSymbol}
          </span>
        </div>
      </div>
      
      <div className="forecast-day__condition">{forecast.conditionText}</div>
      
      <div className="forecast-day__details">
        <div className="forecast-day__detail">
          <span className="forecast-day__detail-icon">💧</span>
          <span>{forecast.precipitation.probability}%</span>
          {forecast.precipitation.amount > 0 && (
            <span className="forecast-day__detail-sub">
              {forecast.precipitation.amount} mm ({getPrecipitationTypeText(forecast.precipitation.type)})
            </span>
          )}
        </div>
        <div className="forecast-day__detail">
          <span className="forecast-day__detail-icon">💨</span>
          <span>{forecast.windSpeed} km/h {forecast.windDirection}</span>
        </div>
        <div className="forecast-day__detail">
          <span className="forecast-day__detail-icon">☁️</span>
          <span>{forecast.cloudCover}%</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastDay;
