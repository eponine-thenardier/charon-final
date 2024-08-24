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
      setLoading(true);
      const getWeatherTrends = async () => {
        const result = await fetchWeatherTrends(city, dates);
        if (result) {
          setWeather(result);
        } else {
          setError('Unable to fetch weather trends.');
        }
        setLoading(false);
      };
      getWeatherTrends();
    } else {
      setError('Please select a city and valid dates.')
    }
  }, [city, dates, setWeather])

  return (
    <div className='weather-container' role="main" aria-labelledby="weather-heading">
      <h2 id="weather-heading">Weather Trends in {city || 'Unknown City'}</h2>
      {loading && <div className="loading" role="status" aria-live="polite">Loading weather trends...</div>}
      {error && <div className="error-message" role="alert">{error}</div>}
      {!loading && !error && <div className="weather-details" aria-live="polite">{weather}</div>}

      <nav className="navigation-container" aria-label="Main navigation">
        <div className="navigation-links">
          <Link to="/home" role="link">Home</Link>
          <Link to="/destinationchosen" role="link">Destination</Link>
          <Link to="/attractions" role="link">Attractions</Link>
        </div>
      </nav>
    </div>
  );
}

export default WeatherTrends;
