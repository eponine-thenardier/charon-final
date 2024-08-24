import { useContext, useEffect, useState } from 'react';
import { fetchWeatherTrends } from '../services/OpenAIService';
import TravelContext from '../context/TravelContext';
import { Link } from 'react-router-dom';

function WeatherTrends() {
  const { city, dates, setWeather, weather } = useContext(TravelContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city && dates.length === 2) {
      setLoading(true)
      const getWeatherTrends = async () => {
        const result = await fetchWeatherTrends(city, dates)
        if (result) {
          setWeather(result)
        } else {
          setError('Unable to fetch weather trends.')
        }
        setLoading(false)
      }
      getWeatherTrends()
    } else {
      setError('Please select a city and valid dates.')
    }
  }, [city, dates]);

  return (
    <div className='weather-container'>
      <h2>Weather Trends in {city}</h2>
      {loading && <div className="loading">Loading weather trends...</div>}
      {error && <div className="error-message">{error}</div>}
      {!loading && !error && <div className="weather-details">{weather}</div>}

      <div className="navigation-links">
        <Link to="/home">Home</Link>
        <Link to="/destinationchosen">Destination</Link>
        <Link to="/attractions">Attractions</Link>
      </div>
    </div>
  );
}

export default WeatherTrends;
