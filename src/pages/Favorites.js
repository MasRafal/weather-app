import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavorites } from '../store/settingsSlice';
import { getCityWeather } from '../data/weatherData';
import CityCard from '../components/CityCard';
import './Favorites.css';

const Favorites = () => {
  const favoriteIds = useSelector(selectFavorites);

  // useMemo do pobierania danych ulubionych miast
  const favoriteCities = useMemo(() => {
    return favoriteIds
      .map(id => {
        const cityData = getCityWeather(id);
        if (!cityData) return null;
        return {
          id: cityData.id,
          name: cityData.name,
          country: cityData.country,
          currentTemp: cityData.current.temperature,
          condition: cityData.current.condition,
          conditionText: cityData.current.conditionText
        };
      })
      .filter(city => city !== null);
  }, [favoriteIds]);

  return (
    <div className="favorites">
      <div className="favorites__container">
        <h1 className="favorites__title">⭐ Ulubione miasta</h1>
        <p className="favorites__subtitle">
          Twoje zapisane miejscowości
        </p>

        {favoriteCities.length === 0 ? (
          <div className="favorites__empty">
            <span className="favorites__empty-icon">☆</span>
            <h2>Brak ulubionych miast</h2>
            <p>
              Dodaj miasta do ulubionych klikając ikonę gwiazdki przy wybranym mieście.
            </p>
            <Link to="/" className="favorites__link-btn">
              Przeglądaj miasta
            </Link>
          </div>
        ) : (
          <div className="favorites__grid">
            {favoriteCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
