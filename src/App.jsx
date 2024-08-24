import HomePage from './components/HomePage';
import './index.css';
import Attractions from './components/Attractions';
import WeatherTrends from "./components/Weather"
import DestinationChosen from "./components/DestinationChosen"
import NotFound from './components/NotFoundPage';
import {Routes, Route, useLocation} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";



const App = () => {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <div className='app-container'>
        <div className="App">
            <Routes location={location} >
              <Route path="/home" element={<HomePage />}/>
              <Route path="/destinationchosen" element={<DestinationChosen />}/>
              <Route path="/attractions" element={<Attractions />}/>
              <Route path="/weather" element={<WeatherTrends />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
         </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App;


