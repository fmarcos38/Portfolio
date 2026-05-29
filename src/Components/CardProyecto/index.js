import React from 'react'
import "./estilos.css";
import CarruselP from '../CarruselP';

import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const techKeywords = ['React', 'Redux', 'JavaScript', 'Node', 'Express', 'MongoDB', 'JWT', 'Material UI', 'Cloudinary', 'Firebase', 'Docker', 'Vercel'];

function CardProyecto({ titulo, descripcion, tecnologiasUtilizadas, linkGithubFront, linkGithubBack, linkURL, imag1, imag2, imag3, imag4, imag5, carouselId }) {
    const tags = techKeywords.filter((tech) => tecnologiasUtilizadas?.toLowerCase().includes(tech.toLowerCase()));

    return (
        <article className="contCard">
            <div className="projectMedia">
                <CarruselP imag1={imag1} imag2={imag2} imag3={imag3} imag4={imag4} imag5={imag5} carouselId={carouselId} titulo={titulo} />
            </div>

            <div className="projectContent">
                <h3>{titulo}</h3>
                <p className='projectDescription'>{descripcion}</p>

                {tags.length > 0 && (
                    <div className='techTags'>
                        {tags.map((tech) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>
                )}

                <p className='tituloD'>Tecnologias utilizadas</p>
                <p className='projectTechText'>{tecnologiasUtilizadas}</p>
            </div>

            <div className="projectActions">
                {linkURL && (
                    <a href={linkURL} className='links'>
                        <LinkIcon /> Demo
                    </a>
                )}
                {linkGithubFront && (
                    <a href={linkGithubFront} className='links'>
                        <GitHubIcon /> Frontend
                    </a>
                )}
                {linkGithubBack && (
                    <a href={linkGithubBack} className='links'>
                        <GitHubIcon /> Backend
                    </a>
                )}
            </div>
        </article>
    )
}

export default CardProyecto
