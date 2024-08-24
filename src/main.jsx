import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TravelProvider from './context/TravelProvider';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <TravelProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TravelProvider>
)