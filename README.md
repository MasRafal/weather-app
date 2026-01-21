# Aplikacja Pogodowa - React

Aplikacja do wyświetlania prognozy pogody stworzona przy użyciu React.

## Funkcjonalności

### Wymagania podstawowe (3.0)
- ✅ Wyświetlanie listy 6 miejscowości na ekranie głównym
- ✅ Podgląd szczegółów prognozy pogody dla każdej miejscowości:
  - Bieżąca temperatura (w stopniach Celsjusza)
  - Bieżące warunki pogodowe (ikona emoji)
  - Prognoza na najbliższe 5 dni
  - Prawdopodobieństwo opadów, ich rodzaj i ilość (mm/m²)
  - Prędkość i kierunek wiatru
  - Stopień zachmurzenia
- ✅ Użycie hooków: `useState`, `useCallback`, `useMemo`, `useEffect`
- ✅ Przełączanie widoków za pomocą `useState` i `useReducer`
- ✅ Reużywalne komponenty (CityCard, WeatherIcon, WeatherDetail, ForecastDay, SearchBar)
- ✅ Style CSS dla wszystkich komponentów

### Wymagania na 3.5
- ✅ React Router - nawigacja między stronami (`/` - lista miast, `/city/:cityId` - szczegóły)
- ✅ Redux Toolkit - globalna zmiana jednostek temperatury (°C/°F/K)

### Wymagania na 4.0
- ✅ Formularz wyszukiwania miast po nazwie

### Wymagania na 4.5
- ✅ Ikona gwiazdki przy każdej miejscowości do oznaczania ulubionych
- ✅ Przechowywanie ulubionych miast w globalnym stanie (Redux)
- ✅ Osobna podstrona `/favorites` z ulubionymi miastami
- ✅ Przechowywanie stanu w localStorage (jednostki temperatury + ulubione)
- ✅ Stan zachowywany po odświeżeniu strony

## Struktura projektu

```
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CityCard.js / CityCard.css
│   │   ├── FavoriteButton.js / FavoriteButton.css  # Przycisk ulubionych (gwiazdka)
│   │   ├── ForecastDay.js / ForecastDay.css
│   │   ├── Header.js / Header.css
│   │   ├── SearchBar.js / SearchBar.css
│   │   ├── TemperatureUnitSelector.js / TemperatureUnitSelector.css
│   │   ├── WeatherDetail.js / WeatherDetail.css
│   │   └── WeatherIcon.js / WeatherIcon.css
│   ├── data/
│   │   └── weatherData.js          # Mock dane pogodowe dla 6 miast
│   ├── hooks/
│   │   └── useTemperature.js       # Custom hook do konwersji temperatury
│   ├── pages/
│   │   ├── Home.js / Home.css      # Strona główna z listą miast
│   │   ├── CityDetail.js / CityDetail.css  # Szczegóły pogody dla miasta
│   │   └── Favorites.js / Favorites.css    # Strona ulubionych miast
│   ├── store/
│   │   ├── store.js                # Redux store
│   │   └── settingsSlice.js        # Redux slice (jednostki temp. + ulubione + localStorage)
│   ├── App.js / App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Instalacja i uruchomienie

### Wymagania
- Node.js (wersja 14 lub wyższa)
- npm

### Kroki

1. **Zainstaluj Node.js** ze strony: https://nodejs.org/

2. **Zainstaluj zależności:**
   ```bash
   cd weather-app
   npm install
   ```

3. **Uruchom aplikację:**
   ```bash
   npm start
   ```

4. Otwórz przeglądarkę pod adresem: http://localhost:3000

## Użyte technologie

- **React 18** - biblioteka do budowy interfejsu
- **React Router 6** - nawigacja między stronami
- **Redux Toolkit** - zarządzanie globalnym stanem (jednostki temperatury)
- **CSS** - stylowanie komponentów

## Miejscowości w aplikacji

1. **Warszawa** - pochmurno, 5°C
2. **Kraków** - mgła, 3°C
3. **Gdańsk** - deszczowo, 7°C
4. **Wrocław** - słonecznie, 8°C
5. **Poznań** - częściowe zachmurzenie, 6°C
6. **Zakopane** - śnieg, -2°C

Każde miasto ma unikalne warunki pogodowe i 5-dniową prognozę.

## Autor

Projekt studencki - aplikacja pogodowa w React.
