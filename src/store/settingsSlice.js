import { createSlice } from '@reduxjs/toolkit';

// Funkcja do ładowania stanu z localStorage
const loadStateFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem('weatherAppSettings');
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error('Błąd ładowania stanu z localStorage:', error);
  }
  return null;
};

// Funkcja do zapisywania stanu do localStorage
const saveStateToLocalStorage = (state) => {
  try {
    localStorage.setItem('weatherAppSettings', JSON.stringify(state));
  } catch (error) {
    console.error('Błąd zapisywania stanu do localStorage:', error);
  }
};

const savedState = loadStateFromLocalStorage();

const initialState = savedState || {
  temperatureUnit: 'celsius', // 'celsius', 'fahrenheit', 'kelvin'
  favorites: [], // tablica z ID ulubionych miast
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTemperatureUnit: (state, action) => {
      state.temperatureUnit = action.payload;
      saveStateToLocalStorage(state);
    },
    toggleFavorite: (state, action) => {
      const cityId = action.payload;
      const index = state.favorites.indexOf(cityId);
      if (index === -1) {
        state.favorites.push(cityId);
      } else {
        state.favorites.splice(index, 1);
      }
      saveStateToLocalStorage(state);
    },
    addFavorite: (state, action) => {
      const cityId = action.payload;
      if (!state.favorites.includes(cityId)) {
        state.favorites.push(cityId);
        saveStateToLocalStorage(state);
      }
    },
    removeFavorite: (state, action) => {
      const cityId = action.payload;
      state.favorites = state.favorites.filter(id => id !== cityId);
      saveStateToLocalStorage(state);
    },
  },
});

export const { setTemperatureUnit, toggleFavorite, addFavorite, removeFavorite } = settingsSlice.actions;

export const selectTemperatureUnit = (state) => state.settings.temperatureUnit;
export const selectFavorites = (state) => state.settings.favorites;
export const selectIsFavorite = (cityId) => (state) => state.settings.favorites.includes(cityId);

export default settingsSlice.reducer;
