import React from 'react';
import "./navbar.css";

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
                <a href='https://www.instagram.com/fmarcos_casla/' className='iconoInsta'>
                    <Instagram />
                </a>
                <a href='https://github.com/fmarcos38' className='itemGithub'>
                    <GitHubIcon/>
                </a>
                <a href='https://www.linkedin.com/in/marcos-forastiere-9b238328/' className='itemLinkedin'>
                    <LinkedInIcon/>
                </a>
            </div>

            {/* contactar */}
            <div className='contItemContacto'>                
                <div className='itemTextoCont'>Contacto</div>
                <div>
                    <a href='#contacto' className='itemContacto'>
                        <MailIcon/>
                    </a>
                </div>           
                <div>
                    <a href='whatsapp' className='itemWhatsApp'>
                        <WhatsAppIcon/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar