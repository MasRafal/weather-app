import { useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { selectTemperatureUnit } from '../store/settingsSlice';

export const useTemperature = () => {
  const unit = useSelector(selectTemperatureUnit);

  const convertTemperature = useCallback((celsius) => {
    switch (unit) {
      case 'fahrenheit':
        return Math.round((celsius * 9/5) + 32);
      case 'kelvin':
        return Math.round(celsius + 273.15);
      case 'celsius':
      default:
        return celsius;
    }
  }, [unit]);

  const unitSymbol = useMemo(() => {
    switch (unit) {
      case 'fahrenheit':
        return '°F';
      case 'kelvin':
        return 'K';
      case 'celsius':
      default:
        return '°C';
    }
  }, [unit]);

  return { convertTemperature, unitSymbol, unit };
};
