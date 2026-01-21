import React from 'react';
import { Link } from 'react-router-dom';
import WeatherIcon from './WeatherIcon';
import FavoriteButton from './FavoriteButton';
import { useTemperature } from '../hooks/useTemperature';
import './CityCard.css';

const CityCard = ({ city }) => {
  const { convertTemperature, unitSymbol } = useTemperature();

  return (
    <Link to={`/city/${city.id}`} className="city-card">
      <div className="city-card__header">
        <div className="city-card__title-row">
          <div>
            <h3 className="city-card__name">{city.name}</h3>
            <span className="city-card__country">{city.country}</span>
          </div>
          <FavoriteButton cityId={city.id} size="small" />
        </div>
      </div>
      <div className="city-card__weather">
        <WeatherIcon condition={city.condition} size="medium" />
        <div className="city-card__temp">
          {convertTemperature(city.currentTemp)}{unitSymbol}
        </div>
      </div>
      <div className="city-card__condition">{city.conditionText}</div>
    </Link>
  );
};

export default CityCard;
