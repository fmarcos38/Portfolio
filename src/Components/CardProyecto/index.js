import React from 'react'
import "./estilos.css";
import CarruselP from '../CarruselP';

import LinkIcon from '@mui/icons-material/Link';

function CardProyecto({titulo, descripcion, tecnologiasUtilizadas, linkGithubFront, linkGithubBack, linkURL, imag1, imag2, imag3}) {


    return (
    <div class="card text-center contCard">
        <div class="card-header">
            <h3>{titulo}</h3>
        </div>

        <div class="card-body">
            {/* carrusel */}
            <CarruselP imag1={imag1} imag2={imag2} imag3={imag3}/>
            <p className='tituloD'>Descripción:</p>
            <p>{descripcion}</p>
            <p className='tituloD'>Tecnologías utilizadas:</p>
            <p>{tecnologiasUtilizadas}</p>        
        </div>

        <div class="card-footer text-muted">
        <a href={linkGithubFront} className='links'><LinkIcon className='links'/>Link Github Frontend</a>
            <br></br>
            {
                linkGithubBack && <a href={linkGithubBack} className='links'><LinkIcon className='links'/>Link Github Backend</a>
            }
            <br></br>
            <a href={linkURL} className='links'><LinkIcon className='links'/>Link Página</a>
        </div>
    </div>
    )
}

export default CardProyecto