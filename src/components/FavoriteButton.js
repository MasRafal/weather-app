import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, selectIsFavorite } from '../store/settingsSlice';
import './FavoriteButton.css';

const FavoriteButton = ({ cityId, size = 'medium' }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(cityId));

  const handleClick = useCallback((e) => {
    e.preventDefault(); // Zapobiega nawigacji gdy przycisk jest w linku
    e.stopPropagation();
    dispatch(toggleFavorite(cityId));
  }, [dispatch, cityId]);

  return (
    <button
      className={`favorite-btn favorite-btn--${size} ${isFavorite ? 'favorite-btn--active' : ''}`}
      onClick={handleClick}
      aria-label={isFavorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
      title={isFavorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
    >
      <span className="favorite-btn__icon">
        {isFavorite ? '★' : '☆'}
      </span>
    </button>
  );
};

export default FavoriteButton;
