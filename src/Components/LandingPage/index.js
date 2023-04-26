import React from 'react';
import "./landing.css";
import Navbar from '../NavBar';
import gif from './program.gif';
import GeolocalizacionMDP from '../GeolocalizacionMDP';

import LocationOnIcon from '@mui/icons-material/LocationOn';

/* import { Link } from 'react-router-dom';
import GeolocalizacionMDP from '../GeolocalizacionMDP'; */

function LandingPage() {


    return (
        <div className='contLanding'>
            {/* navbar */}
            <Navbar/>

            <div className='contImagTexto'>
                <div className='contTexto1'>
                    <h3 className='texto1'>Full Stack Developer</h3>
                </div>
                <div className='contGif'>
                    <img src={gif} alt='not founf gif' className='gifP'/>
                </div>
                <div className='contTexto2'>
                    <h2 className='texto1' >Marcos Forastere</h2>
                </div>
                {/* <div className='contLocalizImg'>
                    <Link to="/geolocalizacion" className='linkCiudad'>
                        <LocationOnIcon/><span>Argentina, Prov de Bs As, Mar del Plata</span>
                    </Link>
                    <Link to="/carruselMDP" className='linkCiudad'>
                        <span className='imagenes'>- Conocé mi ciudad !! -</span>
                    </Link>
                </div> */}
                <div className='contLocalizImg'>
                    {/* btn lanza modal */}
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <LocationOnIcon/> Argentina, Bs As, Mar del Plata
                    </button>

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <GeolocalizacionMDP/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
                    </div>
                </div>
                <div className='contLocalizImg'>
                    <button className='btnGeoloc'> - Conoce mi ciudad -</button>
                </div>

            </div>
            
        </div>
    )
}

export default LandingPage