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
import MuestraSkills from '../Skills';
import About from '../About';

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
                            <button className='btnPersonal'>Proyects</button>
                        </a>
                        <a href='#skills'>
                            <button className='btnPersonal2'>Skills</button>
                        </a>
                        <a href='#about'> 
                            <button className='btnPersonal2'>About Me</button>
                        </a>
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
                <h2 className='tituloP'>Proyectos</h2>
                <ListaProyectos/>
            </div>

            {/* Muestra Skills */}
            <div id="skills">
                <h2 className='tituloSkills'>Skills</h2>
                <MuestraSkills/>
            </div>            

            {/* Muestra Skills */}
            <div id="about">
                <h2 className='tituloSkills'>About me</h2>
                <About/>
            </div>

            {/* formulario de contacto */}
            <div id="contacto">
                <FormularioContacto/>
            </div>
            
        </div>
    )
}

export default LandingPage