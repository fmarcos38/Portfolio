import React from 'react';
import "./navbar.css";
import 'animate.css';
import { Instagram } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const whatsapp = 'https://wa.me/2281460124';

function Navbar() {
    return (
        <div className='contNavbar'>
            <a href='/' className='brandNav'>MF</a>

            <nav className='contLinksNav' aria-label='Navegacion principal'>
                <a href='#proyectos'>Proyectos</a>
                <a href='#skills'>Skills</a>
                <a href='#about'>Sobre mi</a>
                <a href='#contacto'>Contacto</a>
            </nav>

            <div className='contItemsRedes'>
                <a href='https://www.instagram.com/fmarcos_casla/' className='animate__animated animate__bounceInLeft iconoInsta' aria-label='Instagram'>
                    <Instagram />
                </a>
                <a href='https://github.com/fmarcos38' className='animate__animated animate__bounceInLeft iconoInsta' aria-label='GitHub'>
                    <GitHubIcon />
                </a>
                <a href='https://www.linkedin.com/in/marcos-forastiere-9b238328/' className='animate__animated animate__bounceInLeft iconoInsta' aria-label='LinkedIn'>
                    <LinkedInIcon />
                </a>
                <a href='#contacto' className='animate__animated animate__bounceInRight itemContacto' aria-label='Email'>
                    <MailIcon />
                </a>
                <a href={whatsapp} className='animate__animated animate__bounceInRight itemWhatsApp' aria-label='WhatsApp'>
                    <WhatsAppIcon />
                </a>
            </div>
        </div>
    )
}

export default Navbar
