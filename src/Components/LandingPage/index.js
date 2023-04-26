import React from 'react';
import "./landing.css";
import Navbar from '../NavBar';
import gif from './program.gif';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

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
                <div className='contLocalizImg'>
                    <Link to="/geolocalizacion" className='linkCiudad'>
                        <LocationOnIcon/><span>Argentina, Prov de Bs As, Mar del Plata</span>
                    </Link>
                    <Link to="/carruselMDP" className='linkCiudad'>
                        <span className='imagenes'>- Conocé mi ciudad !! -</span>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default LandingPage