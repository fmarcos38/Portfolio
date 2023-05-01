import React from 'react'
import "./estilos.css";
import imgYo from "../../imagenes/yo.jpg";


function About() {
    return (
        <div className='conGralAbout'>
            <div className='contAbout'>
                <img src={imgYo} alt='not found' className='imgYo'/>
                <div className='contTexto'>
                <span className='aboutMe'>
                    👋 ¡Hola, soy Leandro! 📑 En 2021 di un giro a mi carrera profesional como productor audiovisual 🎥 
                    y comencé mis estudios en la academia Henry para formarme como Programador Full-Stack con orientación 
                    Front-End! Con más de +800 horas de pura práctica con programación 💥, 
                    ahora tengo la experiencia trabajando con Javascript, Html, Css, React ⚛️, 
                    Redux entre otras tecnologías. Tengo amplios conocimientos en el mundo del diseño, 
                    estética visual y sonora. Me manejo perfectamente con el inglés. 
                    Actualmente sigo reforzando mis conocimientos con React JS, React Native, TypeScript 
                    y poco a poco voy profundizando en el código BlockChain. ⚡️ 
                    Soy una persona muy paciente, flexible y sociable. 
                    ¡Sé trabajar muy bien en equipo y me encanta estar siempre detrás de las últimas tendencias 
                    y tecnología de punta! 💻📚🌍
                </span>
                </div>                
            </div>
        </div>
    )
}

export default About