import React from 'react';
import { Link } from 'react-router-dom';
import "./landing.css";
import "./botones.scss";
import Navbar from '../NavBar';
import gif from './program.gif';
import GeolocalizacionMDP from '../GeolocalizacionMDP';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListaProyectos from '../ListaProyectos';
import FormularioContacto from '../FormContacto';

/* import { Link } from 'react-router-dom';
import GeolocalizacionMDP from '../GeolocalizacionMDP'; */

function LandingPage() {


    return (
        <div className='contLanding'>
            {/* navbar */}
            <Navbar/>

            <div className='cont2'>
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
                    {/* btn personales */}
                    <div className='contBtnPersonales'>
                        <a href="#proyectos">
                            <button className='btnPersonal'>Proyectos</button>
                        </a>
                        <Link>
                            <button className='btnPersonal2'>Skills</button>
                        </Link>
                        <Link>
                            <button className='btnPersonal2'>hover</button>
                        </Link>
                    </div>

                    {/* btn geoloc */}
                    <div className='contLocalizImg'>
                            {/* btn lanza modal */}
                            <button type="button" class="btn btnGeoloc" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <LocationOnIcon/> Argentina, Bs As, Mar del Plata
                            </button>
                            {/* btn lanza modal2 */}
                            <button type="button" class="btn btnGeoloc" data-bs-toggle="modal" data-bs-target="#exampleModal"> 
                                - Conoce mi ciudad -
                            </button>                

                            {/* Modal */}
                            <div class="modal fade modal-lg modal1" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Mar del Plata</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <GeolocalizacionMDP/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        {/* Modal2 */}
                        <div class="modal fade modal-lg modal1" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                                            Galeria de fotos de la ciudad de Mar del Plata
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <GeolocalizacionMDP/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                

                </div>
            </div>            
            
            {/* Muestra proyetos */}
            <div id="proyectos">
                <ListaProyectos/>
            </div>

            {/* formulario de contacto */}
            <div id="contacto">
                <FormularioContacto/>
            </div>
            
        </div>
    )
}

export default LandingPage