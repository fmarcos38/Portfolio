import React from 'react';
import "./navbar.css";

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Navbar() {
    return (
        <div className='contNavbar'>
            <div className='contItemsRedes'>
                <a href='https://www.instagram.com/fmarcos_casla/' className='iconoInsta'>
                    <InstagramIcon/>
                </a>
                <a href='https://github.com/fmarcos38' className='itemGithub'>
                    <GitHubIcon/>
                </a>
                <a href='https://www.linkedin.com/in/marcos-forastiere-9b238328/' className='itemLinkedin'>
                    <LinkedInIcon/>
                </a>
            </div>
            <div className='contItemContacto'>
                Contacto
            </div>
        </div>
    )
}

export default Navbar