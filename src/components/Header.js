import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../store/settingsSlice';
import TemperatureUnitSelector from './TemperatureUnitSelector';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const favorites = useSelector(selectFavorites);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          🌤️ Prognoza Pogody
        </Link>
        <nav className="header__nav">
          <Link 
            to="/" 
            className={`header__nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Miasta
          </Link>
          <Link 
            to="/favorites" 
            className={`header__nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}
          >
            ⭐ Ulubione {favorites.length > 0 && `(${favorites.length})`}
          </Link>
        </nav>
        <TemperatureUnitSelector />
      </div>
    </header>
  );
};

export default Header;
