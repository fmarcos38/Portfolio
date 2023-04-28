
import { Route, Routes } from 'react-router-dom';
import './App.css';
/* import Navbar from './Components/NavBar'; */
import LandingPage from './Components/LandingPage';
import GeolocalizacionMDP from "./Components/GeolocalizacionMDP";
import CardProyecto from './Components/CardProyecto';
import ListaProyectos from './Components/ListaProyectos';



function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/geolocalizacion' element={<GeolocalizacionMDP/>}/>
        <Route path='/listaProyects' element={<ListaProyectos/>} />
        {/* vista para el desarrollador */}
        <Route path='/card' element={<CardProyecto/>} />
      </Routes> 
    </div>
  );
}

export default App;
