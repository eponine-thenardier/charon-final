import { useContext, useEffect, useState } from 'react';
import { fetchAttractions } from '../services/OpenAIService';
import TravelContext from '../context/TravelContext';
import { Link } from 'react-router-dom';

function Attractions() {
  const { city, setAttractions, attractions } = useContext(TravelContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [attractionList, setAttractionList] = useState([]);

  useEffect(() => {
    if (city) {
      setLoading(true);
      const getAttractions = async () => {
        const result = await fetchAttractions(city);
        if (result) {
          const parsedAttractions = result.split('\n').filter(item => item.trim() !== '');
          setAttractions(result);
          setAttractionList(parsedAttractions);
        } else {
          setError('Unable to fetch attractions.');
        }
        setLoading(false);
      };
      getAttractions();
    } else {
      setError('No city selected.');
    }
  }, [city, setAttractions]);

  return (
    <div className='container' role="main" aria-labelledby="attractions-heading">
      <h1 id="attractions-heading">Attractions</h1>
      {loading && <div className="message" role="status" aria-live="polite">Loading attractions...</div>}
      {error && <div className="error-message" role="alert">{error}</div>}
      {!loading && !error && (
        <ul aria-live="polite">
          {attractionList.map((attraction, index) => (
            <li key={index} className="attraction-item">
              {attraction}
            </li>
          ))}
        </ul>
      )}

      <nav className="navigation-container" aria-label="attractions navigation">
        <div className="navigation-links">
          <Link to="/home" role="link">Home</Link>
          <Link to="/destinationchosen" role="link">Destination</Link>
          <Link to="/weather" role="link">Weather</Link>
        </div>
      </nav>
    </div>
  );
}

export default Attractions;


