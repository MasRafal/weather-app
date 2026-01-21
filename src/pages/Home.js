import React, { useState, useCallback, useMemo, useEffect } from 'react';
import CityCard from '../components/CityCard';
import SearchBar from '../components/SearchBar';
import { getCityList, searchCities } from '../data/weatherData';
import './Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cities, setCities] = useState([]);

  // useEffect do załadowania początkowych danych
  useEffect(() => {
    const allCities = getCityList();
    setCities(allCities);
  }, []);

  // useCallback dla funkcji wyszukiwania
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  // useMemo do filtrowania miast na podstawie wyszukiwania
  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) {
      return cities;
    }
    return searchCities(searchQuery);
  }, [searchQuery, cities]);

  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__title">Prognoza pogody</h1>
        <p className="home__subtitle">Wybierz miasto, aby zobaczyć szczegółową prognozę</p>
        
        <SearchBar 
          onSearch={handleSearch} 
          placeholder="Szukaj miasta po nazwie..."
        />
        
        {filteredCities.length === 0 ? (
          <div className="home__no-results">
            <span className="home__no-results-icon">🔍</span>
            <p>Nie znaleziono miasta "{searchQuery}"</p>
          </div>
        ) : (
          <div className="home__cities-grid">
            {filteredCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
