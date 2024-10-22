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
                    👋 ¡Hola, soy Marcos! En agosto del 2021 di un giro en mi vida y comencé mis estudios 
                    en la academia Soy Henry para formarme como Programador Full-Stack!. Con más de 800 horas teórico/prácticas 💥, 
                    desde entonces no ha pasado un día en el que no programe (salvo los domingos jeje). 
<<<<<<< HEAD
                    Actualmente estoy realizando cursos en la plataforma PLATZI, tanto de frontend como de backend ⚡️ 
                    Soy una persona paciente, proactiva, autodidacta, apasionado por la tecnología, los viajes, el deporte y la música,
                    flexible, sociable y con capacidad de liderazgo. 
                    Por todo ello, creo que puedo contribuir de manera significativa al éxito de su empresa.
                    ¡Sé trabajar muy bien en equipo y siempre atento a las últimas tendencias y tecnologías! 💻
=======
                    Actualmente estoy realizando un curso PHP, próximamente en Python, docker ⚡️ 
                    Soy una persona paciente, proactiva, autodidacta, apasionado por la tecnología, los viajes, el deporte y la música,
                    flexible, sociable y con capacidad de liderazgo. 
                    Por todo ello, creo que puedo contribuir de manera significativa al éxito de su empresa.
                    ¡Sé trabajar muy bien en equipo, soy autodidacta y me encanta estar siempre detrás de las 
                    últimas tendencias tecnológicas! 💻
>>>>>>> 2c20fc8e1a3ef2460626030609d5e09929794905
                </span>
                </div>                
            </div>
        </div>
    )
}

export default About
