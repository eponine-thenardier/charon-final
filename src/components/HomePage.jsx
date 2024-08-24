import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import TravelContext from "../context/TravelContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { setCity, setDates } = useContext(TravelContext);
  const [inputDestination, setInputDestination] = useState("");
  const [inputDateRange, setInputDateRange] = useState([]);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleSearch = () => {
    if (!inputDestination || inputDateRange.length !== 2) {
      alert('Please enter a valid destination and date range.');
      return;
    }

    setCity(inputDestination);
    setDates(inputDateRange);
    setIsFlipping(true);

    setTimeout(() => {
      setIsFlipping(false);
      navigate('/destinationchosen');
    }, 800);
  };

  return (
    <div className="home-container" role="main" aria-labelledby="welcome-heading">
      <div className="fog" aria-hidden="true">
        <div className="fog-layer fog-layer-1"></div>
        <div className="fog-layer fog-layer-2"></div>
        <div className="fog-layer fog-layer-3"></div>
      </div>
      <h1 id="welcome-heading" className="flicker">WELCOME TRAVELER</h1>
      <p className="flicker">LET CHARON GUIDE YOU</p>
      <div className="steps">
        <div className="step">
          <label htmlFor="destination-input"> Choose your destination</label>
          <input
            type="text"
            id="destination-input"
            placeholder="Enter destination"
            value={inputDestination}
            onChange={(e) => setInputDestination(e.target.value)}
            className="dark-input"
            aria-required="true"
          />
        </div>
        <div className="step">
          <label htmlFor="date-range-input"> Choose your dates</label>
          <input
            type="text"
            id="date-range-input"
            className="datepicker-input"
            placeholder="Select date range"
            onFocus={(e) => {
              flatpickr(e.target, {
                mode: "range",
                dateFormat: "Y-m-d",
                onChange: (selectedDates) => setInputDateRange(selectedDates),
              });
            }}
            aria-required="true"
          />
        </div>
        <div className="step">
          <p>Pay the toll</p>
          <button
            className={`round-button ${isFlipping ? 'flip' : ''}`}
            onClick={handleSearch}
            aria-label="Enter destination and dates"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;



