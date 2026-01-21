import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTemperatureUnit, selectTemperatureUnit } from '../store/settingsSlice';
import './TemperatureUnitSelector.css';

const TemperatureUnitSelector = () => {
  const dispatch = useDispatch();
  const currentUnit = useSelector(selectTemperatureUnit);

  const handleUnitChange = useCallback((unit) => {
    dispatch(setTemperatureUnit(unit));
  }, [dispatch]);

  return (
    <div className="temp-unit-selector">
      <button
        className={`temp-unit-selector__btn ${currentUnit === 'celsius' ? 'active' : ''}`}
        onClick={() => handleUnitChange('celsius')}
      >
        °C
      </button>
      <button
        className={`temp-unit-selector__btn ${currentUnit === 'fahrenheit' ? 'active' : ''}`}
        onClick={() => handleUnitChange('fahrenheit')}
      >
        °F
      </button>
      <button
        className={`temp-unit-selector__btn ${currentUnit === 'kelvin' ? 'active' : ''}`}
        onClick={() => handleUnitChange('kelvin')}
      >
        K
      </button>
    </div>
  );
};

export default TemperatureUnitSelector;
