import React from 'react'
import "./estilos.css";
import imgYo from "../../imagenes/yo.jpg";

function About() {
    return (
        <div className='conGralAbout'>
            <div className='contAbout'>
                <img src={imgYo} alt='Marcos Forastiere' className='imgYo' />
                <div className='contTexto'>
                    <p className='aboutMe'>
                        Soy desarrollador Full Stack con foco en aplicaciones web, sistemas administrativos y herramientas de gestion. Trabajo principalmente con React, Redux, Node, Express y MongoDB.
                    </p>
                    <p className='aboutMe'>
                        Me interesa construir productos claros, mantenibles y utiles para usuarios reales: paneles de gestion, flujos de compra, control de stock, clientes, proveedores e informes.
                    </p>
                    <div className='aboutHighlights'>
                        <span>Frontend</span>
                        <span>Backend</span>
                        <span>APIs REST</span>
                        <span>Gestion</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
