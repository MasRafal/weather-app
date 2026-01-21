// Dane pogodowe dla miejscowości (mock data)
export const citiesWeatherData = {
  warszawa: {
    id: 'warszawa',
    name: 'Warszawa',
    country: 'Polska',
    current: {
      temperature: 5,
      condition: 'cloudy',
      conditionText: 'Pochmurno',
      humidity: 78,
      windSpeed: 15,
      windDirection: 'NW',
      cloudCover: 85,
      precipitation: {
        probability: 20,
        type: 'rain',
        amount: 0
      }
    },
    forecast: [
      {
        day: 'Poniedziałek',
        date: '22.01',
        tempMax: 6,
        tempMin: 2,
        condition: 'partly-cloudy',
        conditionText: 'Częściowe zachmurzenie',
        precipitation: { probability: 10, type: 'none', amount: 0 },
        windSpeed: 12,
        windDirection: 'W',
        cloudCover: 45
      },
      {
        day: 'Wtorek',
        date: '23.01',
        tempMax: 4,
        tempMin: 0,
        condition: 'rainy',
        conditionText: 'Deszczowo',
        precipitation: { probability: 70, type: 'rain', amount: 5.2 },
        windSpeed: 20,
        windDirection: 'SW',
        cloudCover: 90
      },
      {
        day: 'Środa',
        date: '24.01',
        tempMax: 2,
        tempMin: -2,
        condition: 'snowy',
        conditionText: 'Śnieg',
        precipitation: { probability: 80, type: 'snow', amount: 8.0 },
        windSpeed: 18,
        windDirection: 'N',
        cloudCover: 100
      },
      {
        day: 'Czwartek',
        date: '25.01',
        tempMax: 1,
        tempMin: -3,
        condition: 'cloudy',
        conditionText: 'Pochmurno',
        precipitation: { probability: 30, type: 'snow', amount: 1.0 },
        windSpeed: 10,
        windDirection: 'NE',
        cloudCover: 75
      },
      {
        day: 'Piątek',
        date: '26.01',
        tempMax: 3,
        tempMin: -1,
        condition: 'sunny',
        conditionText: 'Słonecznie',
        precipitation: { probability: 5, type: 'none', amount: 0 },
        windSpeed: 8,
        windDirection: 'E',
        cloudCover: 10
      }
    ]
  },
  krakow: {
    id: 'krakow',
    name: 'Kraków',
    country: 'Polska',
    current: {
      temperature: 3,
      condition: 'foggy',
      conditionText: 'Mgła',
      humidity: 92,
      windSpeed: 5,
      windDirection: 'S',
      cloudCover: 100,
      precipitation: {
        probability: 40,
        type: 'rain',
        amount: 0.5
      }
    },
    forecast: [
      {
        day: 'Poniedziałek',
        date: '22.01',
        tempMax: 4,
        tempMin: 0,
        condition: 'foggy',
        conditionText: 'Mgła',
        precipitation: { probability: 50, type: 'rain', amount: 2.0 },
        windSpeed: 6,
        windDirection: 'S',
        cloudCover: 100
      },
      {
        day: 'Wtorek',
        date: '23.01',
        tempMax: 5,
        tempMin: 1,
        condition: 'cloudy',
        conditionText: 'Pochmurno',
        precipitation: { probability: 60, type: 'rain', amount: 4.5 },
        windSpeed: 12,
        windDirection: 'SW',
        cloudCover: 85
      },
      {
        day: 'Środa',
        date: '24.01',
        tempMax: 2,
        tempMin: -1,
        condition: 'rainy',
        conditionText: 'Deszczowo',
        precipitation: { probability: 75, type: 'rain', amount: 6.0 },
        windSpeed: 15,
        windDirection: 'W',
        cloudCover: 95
      },
      {
        day: 'Czwartek',
        date: '25.01',
        tempMax: 0,
        tempMin: -4,
        condition: 'snowy',
        conditionText: 'Śnieg',
        precipitation: { probability: 85, type: 'snow', amount: 10.0 },
        windSpeed: 14,
        windDirection: 'N',
        cloudCover: 100
      },
      {
        day: 'Piątek',
        date: '26.01',
        tempMax: 1,
        tempMin: -3,
        condition: 'partly-cloudy',
        conditionText: 'Częściowe zachmurzenie',
        precipitation: { probability: 20, type: 'snow', amount: 0.5 },
        windSpeed: 8,
        windDirection: 'NE',
        cloudCover: 40
      }
    ]
  },
  gdansk: {
    id: 'gdansk',
    name: 'Gdańsk',
    country: 'Polska',
    current: {
      temperature: 7,
      condition: 'rainy',
      conditionText: 'Deszczowo',
      humidity: 85,
      windSpeed: 25,
      windDirection: 'W',
      cloudCover: 90,
      precipitation: {
        probability: 80,
        type: 'rain',
        amount: 3.5
      }
    },
    forecast: [
      {
        day: 'Poniedziałek',
        date: '22.01',
        tempMax: 8,
        tempMin: 4,
        condition: 'rainy',
        conditionText: 'Deszczowo',
        precipitation: { probability: 85, type: 'rain', amount: 7.0 },
        windSpeed: 30,
        windDirection: 'W',
        cloudCover: 95
      },
      {
        day: 'Wtorek',
        date: '23.01',
        tempMax: 6,
        tempMin: 3,
        condition: 'stormy',
        conditionText: 'Burza',
        precipitation: { probability: 90, type: 'rain', amount: 15.0 },
        windSpeed: 45,
        windDirection: 'SW',
        cloudCover: 100
      },
      {
        day: 'Środa',
        date: '24.01',
        tempMax: 5,
        tempMin: 2,
        condition: 'cloudy',
        conditionText: 'Pochmurno',
        precipitation: { probability: 40, type: 'rain', amount: 2.0 },
        windSpeed: 20,
        windDirection: 'NW',
        cloudCover: 70
      },
      {
        day: 'Czwartek',
        date: '25.01',
        tempMax: 4,
        tempMin: 1,
        condition: 'partly-cloudy',
        conditionText: 'Częściowe zachmurzenie',
        precipitation: { probability: 25, type: 'rain', amount: 0.5 },
        windSpeed: 15,
        windDirection: 'N',
        cloudCover: 50
      },
      {
        day: 'Piątek',
        date: '26.01',
        tempMax: 5,
        tempMin: 2,
        condition: 'sunny',
        conditionText: 'Słonecznie',
        precipitation: { probability: 5, type: 'none', amount: 0 },
        windSpeed: 10,
        windDirection: 'E',
        cloudCover: 15
      }
    ]
  },
  wroclaw: {
    id: 'wroclaw',
    name: 'Wrocław',
    country: 'Polska',
    current: {
      temperature: 8,
      condition: 'sunny',
      conditionText: 'Słonecznie',
      humidity: 65,
      windSpeed: 10,
      windDirection: 'SE',
      cloudCover: 15,
      precipitation: {
        probability: 5,
        type: 'none',
        amount: 0
      }
    },
    forecast: [
      {
        day: 'Poniedziałek',
        date: '22.01',
        tempMax: 10,
        tempMin: 4,
        condition: 'sunny',
        conditionText: 'Słonecznie',
        precipitation: { probability: 0, type: 'none', amount: 0 },
        windSpeed: 8,
        windDirection: 'S',
        cloudCover: 5
      },
      {
        day: 'Wtorek',
        date: '23.01',
        tempMax: 9,
        tempMin: 3,
        condition: 'partly-cloudy',
        conditionText: 'Częściowe zachmurzenie',
        precipitation: { probability: 15, type: 'none', amount: 0 },
        windSpeed: 12,
        windDirection: 'SW',
        cloudCover: 35
      },
      {
        day: 'Środa',
        date: '24.01',
        tempMax: 7,
        tempMin: 2,
        condition: 'cloudy',
        conditionText: 'Pochmurno',
        precipitation: { probability: 45, type: 'rain', amount: 1.5 },
        windSpeed: 15,
        windDirection: 'W',
        cloudCover: 70
      },
      {
        day: 'Czwartek',
        date: '25.01',
        tempMax: 5,
        tempMin: 0,
        condition: 'rainy',
        conditionText: 'Deszczowo',
        precipitation: { probability: 65, type: 'rain', amount: 4.0 },
        windSpeed: 18,
        windDirection: 'NW',
        cloudCover: 85
      },
      {
        day: 'Piątek',
        date: '26.01',
        tempMax: 4,
        tempMin: -1,
        condition: 'partly-cloudy',
        conditionText: 'Częściowe zachmurzenie',
        precipitation: { probability: 20, type: 'rain', amount: 0.5 },
        windSpeed: 10,
        windDirection: 'N',
        cloudCover: 40
      }
    ]
  },
  poznan: {
    id: 'poznan',
    name: 'Poznań',
    country: 'Polska',
    current: {
      temperature: 6,
      condition: 'partly-cloudy',
      conditionText: 'Częściowe zachmurzenie',
      humidity: 70,
      windSpeed: 18,
      windDirection: 'NW',
      cloudCover: 55,
      precipitation: {
        probability: 30,
        type: 'rain',
        amount: 0.2
      }
    },
    forecast: [
      {
        day: 'Poniedziałek',
        date: '22.01',
        tempMax: 7,
        tempMin: 2,
        condition: 'cloudy',
        conditionText: 'Pochmurno',
        precipitation: { probability: 35, type: 'rain', amount: 1.0 },
        windSpeed: 15,
        windDirection: 'W',
        cloudCover: 65
      },
      {
        day: 'Wtorek',
        date: '23.01',
        tempMax: 5,
        tempMin: 1,
        condition: 'rainy',
        conditionText: 'Deszczowo',
        precipitation: { probability: 70, type: 'rain', amount: 6.0 },
        windSpeed: 22,
        windDirection: 'SW',
        cloudCover: 90
      },
      {
        day: 'Środa',
        date: '24.01',
        tempMax: 3,
        tempMin: -1,
        condition: 'snowy',
        conditionText: 'Śnieg',
        precipitation: { probability: 75, type: 'snow', amount: 5.0 },
        windSpeed: 20,
        windDirection: 'N',
        cloudCover: 100
      },
      {
        day: 'Czwartek',
        date: '25.01',
        tempMax: 2,
        tempMin: -2,
        condition: 'cloudy',
        conditionText: 'Pochmurno',
        precipitation: { probability: 25, type: 'snow', amount: 0.5 },
        windSpeed: 12,
        windDirection: 'NE',
        cloudCover: 75
      },
      {
        day: 'Piątek',
        date: '26.01',
        tempMax: 4,
        tempMin: 0,
        condition: 'sunny',
        conditionText: 'Słonecznie',
        precipitation: { probability: 5, type: 'none', amount: 0 },
        windSpeed: 8,
        windDirection: 'E',
        cloudCover: 10
      }
    ]
  },
  zakopane: {
    id: 'zakopane',
    name: 'Zakopane',
    country: 'Polska',
    current: {
      temperature: -2,
      condition: 'snowy',
      conditionText: 'Śnieg',
      humidity: 88,
      windSpeed: 8,
      windDirection: 'N',
      cloudCover: 100,
      precipitation: {
        probability: 90,
        type: 'snow',
        amount: 12.0
      }
    },
    forecast: [
      {
        day: 'Poniedziałek',
        date: '22.01',
        tempMax: -1,
        tempMin: -6,
        condition: 'snowy',
        conditionText: 'Śnieg',
        precipitation: { probability: 95, type: 'snow', amount: 20.0 },
        windSpeed: 10,
        windDirection: 'N',
        cloudCover: 100
      },
      {
        day: 'Wtorek',
        date: '23.01',
        tempMax: -3,
        tempMin: -8,
        condition: 'snowy',
        conditionText: 'Śnieg',
        precipitation: { probability: 85, type: 'snow', amount: 15.0 },
        windSpeed: 12,
        windDirection: 'NE',
        cloudCover: 95
      },
      {
        day: 'Środa',
        date: '24.01',
        tempMax: -5,
        tempMin: -12,
        condition: 'cloudy',
        conditionText: 'Pochmurno',
        precipitation: { probability: 40, type: 'snow', amount: 3.0 },
        windSpeed: 8,
        windDirection: 'E',
        cloudCover: 80
      },
      {
        day: 'Czwartek',
        date: '25.01',
        tempMax: -4,
        tempMin: -10,
        condition: 'partly-cloudy',
        conditionText: 'Częściowe zachmurzenie',
        precipitation: { probability: 20, type: 'snow', amount: 1.0 },
        windSpeed: 6,
        windDirection: 'SE',
        cloudCover: 45
      },
      {
        day: 'Piątek',
        date: '26.01',
        tempMax: -2,
        tempMin: -8,
        condition: 'sunny',
        conditionText: 'Słonecznie',
        precipitation: { probability: 5, type: 'none', amount: 0 },
        windSpeed: 5,
        windDirection: 'S',
        cloudCover: 10
      }
    ]
  }
};

export const getCityList = () => {
  return Object.values(citiesWeatherData).map(city => ({
    id: city.id,
    name: city.name,
    country: city.country,
    currentTemp: city.current.temperature,
    condition: city.current.condition,
    conditionText: city.current.conditionText
  }));
};

export const getCityWeather = (cityId) => {
  return citiesWeatherData[cityId] || null;
};

export const searchCities = (query) => {
  const lowerQuery = query.toLowerCase();
  return Object.values(citiesWeatherData)
    .filter(city => city.name.toLowerCase().includes(lowerQuery))
    .map(city => ({
      id: city.id,
      name: city.name,
      country: city.country,
      currentTemp: city.current.temperature,
      condition: city.current.condition,
      conditionText: city.current.conditionText
    }));
};
