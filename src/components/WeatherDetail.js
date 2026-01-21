import React from 'react';
import './WeatherDetail.css';

const WeatherDetail = ({ icon, label, value, subValue }) => {
  return (
    <div className="weather-detail">
      <span className="weather-detail__icon">{icon}</span>
      <div className="weather-detail__content">
        <span className="weather-detail__label">{label}</span>
        <span className="weather-detail__value">{value}</span>
        {subValue && (
          <span className="weather-detail__sub-value">{subValue}</span>
        )}
      </div>
    </div>
  );
};

export default WeatherDetail;
