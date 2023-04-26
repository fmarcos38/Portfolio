
import { Route, Routes } from 'react-router-dom';
import './App.css';
/* import Navbar from './Components/NavBar'; */
import LandingPage from './Components/LandingPage';
import GeolocalizacionMDP from "./Components/GeolocalizacionMDP";



function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/geolocalizacion' element={<GeolocalizacionMDP/>}/>
      </Routes> 
    </div>
  );
}

export default App;
