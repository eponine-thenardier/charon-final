import { Link } from 'react-router-dom';
import '../App.css';

const NotFound = () => {
  return (
    <div className="not-found-container" role="main" aria-labelledby="not-found-heading">
      <div className="fog" aria-hidden="true">
        <div className="fog-layer fog-layer-1"></div>
        <div className="fog-layer fog-layer-2"></div>
        <div className="fog-layer fog-layer-3"></div>
      </div>
      <h1 id="not-found-heading">404 - What are you doing here?</h1>
      <p>Did you get lost on your travels?</p>
      <Link to="/" className="home-link" aria-label="Return to home page">Return from whence you came</Link>
    </div>
  );
};

export default NotFound;
