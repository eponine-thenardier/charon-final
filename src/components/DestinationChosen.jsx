import { useContext } from "react";
import TravelContext from "../context/TravelContext";
import { Link } from 'react-router-dom';

const DestinationChosen = () => {
  const { city, dates } = useContext(TravelContext);
  
  return (
    <div className="destination-container" role="main" aria-labelledby="destination-heading">
      <h2 id="destination-heading">You have chosen {city || 'No city selected'}</h2>
      <p>
        Dates: {dates.length > 0 ? `${dates[0].toLocaleDateString()} to ${dates[1].toLocaleDateString()}` : 'No dates selected'}
      </p>
      <p>What would you like to explore?</p>
      <nav className="options" aria-label="Explore options">
        <Link to="/attractions" role="link">Attractions</Link>
        <Link to="/weather" role="link">Weather</Link>
      </nav>
      <p>Return from where you came</p>
      <nav aria-label="Return navigation">
        <Link to="/home" role="link">Home</Link>
      </nav>
    </div>
  );
}

export default DestinationChosen;

