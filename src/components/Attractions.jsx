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
      setLoading(true)
      const getAttractions = async () => {
        const result = await fetchAttractions(city);
        if (result) {
          const parsedAttractions = result.split('\n').filter(item => item.trim() !== '')
          setAttractions(result)
          setAttractionList(parsedAttractions)
        } else {
          setError('Unable to fetch attractions.')
        }
        setLoading(false)
      };
      getAttractions()
    } else {
      setError('No city selected.')
    }
  }, [city, setAttractions])

  return (
    <div className='container'>
      {loading && <div className="message">Loading attractions...</div>}
      {error && <div className="error-message">{error}</div>}
      {!loading && !error && (
        <ul>
          {attractionList.map((attraction, index) => (
            <li key={index} className="attraction-item">
              {attraction}
            </li>
          ))}
        </ul>
      )}

      <div className="navigation-container">
        <div className="navigation-links">
          <Link to="/home">Home</Link>
          <Link to="/destinationchosen">Destination</Link>
          <Link to="/weather">Weather</Link>
        </div>
      </div>
    </div>
  )
}

export default Attractions;

