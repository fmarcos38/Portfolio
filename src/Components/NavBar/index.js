import React from 'react';
import "./navbar.css";
/* para animaciones */
import 'animate.css';
import {Instagram} from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


//--url whatsapp-------------------------------
let whatsapp = 'https://wa.me/2281460124⁣';

function Navbar() {

    return (
        <div className='contNavbar'>
            {/* redes */}
            <div className='contItemsRedes'>
                <a href='https://www.instagram.com/fmarcos_casla/' class='animate__animated animate__bounceInLeft iconoInsta'>
                    <Instagram />
                </a>
                <a href='https://github.com/fmarcos38' class='animate__animated animate__bounceInLeft iconoInsta'>
                    <GitHubIcon/>
                </a>
                <a href='https://www.linkedin.com/in/marcos-forastiere-9b238328/' class='animate__animated animate__bounceInLeft iconoInsta'>
                    <LinkedInIcon/>
                </a>
            </div>

            {/* contactar */}
            <div className='contItemContacto'>             
                    <div class='animate__animated animate__bounceInRight'>
                        <a href='#contacto' class='itemContacto'>
                            <MailIcon/>
                        </a>
                    </div>           
                    <div class='animate__animated animate__bounceInRight'>
                        <a href={whatsapp} class='itemWhatsApp'>
                        <WhatsAppIcon/>
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default Navbar