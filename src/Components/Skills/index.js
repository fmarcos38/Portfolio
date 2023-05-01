import React from 'react'
import "./estilos.css";

import logoHtml from "../../imagenes/html.png";
import logoCss from "../../imagenes/CSS3.jpg";
import logoReact from "../../imagenes/react.jpg";
import logoJS from "../../imagenes/JavaScript.png";
import logoRedux from "../../imagenes/Redux.png";
import logoBootstrap from "../../imagenes/bootstrap.png";
import logoMaterial from "../../imagenes/materialUI.png";
import logoNode from "../../imagenes/node.png";
import logoExpress from "../../imagenes/express.png";
import logoMongo from "../../imagenes/mongodb.png";
import logoSql from "../../imagenes/sql.jpg";
import logoPostman from "../../imagenes/postman.webp";
import logoNPM from "../../imagenes/npm.png";
import logoGit from "../../imagenes/GitHub.jpg";


function MuestraSkills() {
    return (
        <div class='contGralSkills'>
            
            <div class='contSkills'>
                <img src={logoHtml} alt='not found' className='logoJS'/>
                <img src={logoCss} alt='not found' className='logoJS'/>
                <img src={logoJS} alt='not found' className='logoJS'/>
                <img src={logoReact} alt='not found' className='logoReact'/>
                <img src={logoRedux} alt='not found' className='logoRedux'/>
                <img src={logoBootstrap} alt='not found' className='logoJS'/>
                <img src={logoMaterial} alt='not found' className='logoRedux'/>
                <img src={logoNode} alt='not found' className='logoJS'/>
                <img src={logoExpress} alt='not found' className='logoJS'/>
                <img src={logoMongo} alt='not found' className='logoJS'/>
                <img src={logoSql} alt='not found' className='logoJS'/>
                <img src={logoPostman} alt='not found' className='logoJS'/>
                <img src={logoNPM} alt='not found' className='logoRedux'/>
                <img src={logoGit} alt='not found' className='logoJS'/>
            </div>
        </div>
    )
}

export default MuestraSkills