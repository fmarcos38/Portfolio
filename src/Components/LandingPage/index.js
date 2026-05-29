import React from 'react';
import "./landing.css";
import "./botones.scss";
import 'animate.css';
import Navbar from '../NavBar';
import gif from './program.gif';
import GeolocalizacionMDP from '../GeolocalizacionMDP';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListaProyectos from '../ListaProyectos';
import FormularioContacto from '../FormContacto';
import MuestraSkills from '../Skills';
import About from '../About';
import Carrusel from '../Carrusel';

import mdp1 from "../../imagenes/mdp1.jpg";
import mdp2 from "../../imagenes/mdp2.jpg";
import mdp3 from "../../imagenes/mdp3.jpg";

function LandingPage() {
    return (
        <div className='contLanding'>
            <Navbar />

            <section className='heroSection' id='inicio'>
                <div className='heroContent'>
                    <span className='heroKicker'>Full Stack Developer</span>
                    <h1 className='nombre'>Marcos Forastiere</h1>
                    <p className='heroText'>
                        Desarrollo aplicaciones web, sistemas administrativos y herramientas de gestion con React, Node, Express y MongoDB.
                    </p>

                    <div className='contBtnPersonales'>
                        <a href="#proyectos" className='btnPrimary'>Ver proyectos</a>
                        <a href='#contacto' className='btnSecondary'>Contactarme</a>
                    </div>

                    <div className='heroSocial'>
                        <a href='https://github.com/fmarcos38' aria-label='GitHub'>
                            <GitHubIcon /> GitHub
                        </a>
                        <a href='https://www.linkedin.com/in/marcos-forastiere-9b238328/' aria-label='LinkedIn'>
                            <LinkedInIcon /> LinkedIn
                        </a>
                    </div>

                    <div className='contLocalizImg'>
                        <button type="button" className="btn btnGeoloc" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <LocationOnIcon /> Mar del Plata, Argentina
                        </button>
                        <button type="button" className="btn btnGeoloc" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            Ver ciudad
                        </button>
                    </div>
                </div>

                <div className='heroVisual' aria-hidden='true'>
                    <img src={gif} alt='' className='gifP' />
                    <div className='heroStats'>
                        <span>React</span>
                        <span>Node</span>
                        <span>MongoDB</span>
                    </div>
                </div>
            </section>

            <div className="modal fade modal-lg modal1" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Mar del Plata</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <GeolocalizacionMDP />
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade modal-lg modal1" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel2">
                                Galeria de fotos de Mar del Plata
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Carrusel imag1={mdp1} imag2={mdp2} imag3={mdp3} />
                        </div>
                    </div>
                </div>
            </div>

            <section id="proyectos" className='pageSection'>
                <div className='sectionHeader'>
                    <span>Trabajo seleccionado</span>
                    <h2 className='tituloP'>Proyectos</h2>
                </div>
                <ListaProyectos />
            </section>

            <section id="skills" className='pageSection'>
                <div className='sectionHeader'>
                    <span>Stack principal</span>
                    <h2 className='tituloSkills'>Skills</h2>
                </div>
                <MuestraSkills />
            </section>

            <section id="about" className='pageSection'>
                <div className='sectionHeader'>
                    <span>Perfil</span>
                    <h2 className='tituloSkills'>Sobre mi</h2>
                </div>
                <About />
            </section>

            <section id="contacto" className='pageSection contactSection'>
                <FormularioContacto />
            </section>
        </div>
    )
}

export default LandingPage
