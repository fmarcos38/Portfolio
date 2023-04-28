import React from 'react'
import "./estilos.css";
import Carrusel from '../Carrusel';

import LinkIcon from '@mui/icons-material/Link';

function CardProyecto({titulo, descripcion, tecnologiasUtilizadas, linkGithubFront, linkGithubBack, linkURL, imag1, imag2, imag3}) {


    return (
    <div class="card text-center contCard">
        <div class="card-header">
            <h3>{titulo}</h3>
        </div>

        <div class="card-body">
            {/* carrusel */}
            <Carrusel imag1={imag1} imag2={imag2} imag3={imag3}/>
            <p>Descripción:</p>
            <p>{descripcion}</p>
            <p>Tecnologías utilizadas:</p>
            <p>{tecnologiasUtilizadas}</p>            
            <a href={linkGithubFront}><LinkIcon/>Link Github Frontend</a>
            <br></br>
            {
                linkGithubBack && <a href={linkGithubBack}><LinkIcon/>Link Github Backend</a>
            }
            <br></br>
            <a href={linkURL}><LinkIcon/>Link Página</a>

            
        </div>

        <div class="card-footer text-muted">
            <h5>Skills</h5>
            <img src='https://w7.pngwing.com/pngs/574/164/png-transparent-react-computer-icons-redux-javascript-others-symmetry-electron-redux.png'
                alt='not found' className='simboloSkill'/>
        </div>
    </div>
    )
}

export default CardProyecto