import { Link } from 'react-router-dom';
import '../App.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - What are you doing here?</h1>
      <p>Did you get lost on your travels?</p>
      <Link to="/home" className="home-link">Return from whence you came</Link>
    </div>
  );
};

export default NotFound;
