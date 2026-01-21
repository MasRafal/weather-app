import React, { useMemo } from 'react';
import './WeatherIcon.css';

const WeatherIcon = ({ condition, size = 'medium' }) => {
  const iconData = useMemo(() => {
    const icons = {
      'sunny': { emoji: '☀️', className: 'sunny' },
      'partly-cloudy': { emoji: '⛅', className: 'partly-cloudy' },
      'cloudy': { emoji: '☁️', className: 'cloudy' },
      'rainy': { emoji: '🌧️', className: 'rainy' },
      'stormy': { emoji: '⛈️', className: 'stormy' },
      'snowy': { emoji: '❄️', className: 'snowy' },
      'foggy': { emoji: '🌫️', className: 'foggy' },
    };
    return icons[condition] || icons['cloudy'];
  }, [condition]);

  return (
    <span className={`weather-icon weather-icon--${size} weather-icon--${iconData.className}`}>
      {iconData.emoji}
    </span>
  );
};

export default WeatherIcon;
