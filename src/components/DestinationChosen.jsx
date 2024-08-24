import { useContext } from "react";
import TravelContext from "../context/TravelContext";
import { Link } from 'react-router-dom';

const DestinationChosen = () => {
  const { city, dates } = useContext(TravelContext);
  
  return (
    <div className="destination-container">
      <h2>You have chosen {city}</h2>
      <p>
        Dates: {dates.length > 0 ? `${dates[0].toLocaleDateString()} to ${dates[1].toLocaleDateString()}` : 'No dates selected'}
      </p>
      <p>What would you like to explore?</p>
      <div className="options">
        <Link to="/attractions">Attractions</Link>
        <Link to="/weather">Weather</Link>
      </div>
      <p>Return from where you came</p>
      <div>
        <Link to="/home">Home</Link>
      </div>
    </div>
  )
}

export default DestinationChosen;
