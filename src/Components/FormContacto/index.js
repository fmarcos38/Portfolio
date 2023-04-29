import React, { useRef, useState } from 'react';
import "./estilos.css";
import "../LandingPage/botones.scss";
/* envio de email */
import emailjs from '@emailjs/browser';


function FormularioContacto() {

    //estados
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensj, setMensj] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_PUBLIC)
            .then((result) => {
                console.log(result.text);
                alert("Mail enviado !!");
                setNombre("");
                setEmail("");
                setAsunto("");
                setMensj("");
            }, (error) => {
                console.log(error.text);
                alert("Error al enviar !!");
            });            
        };


    return (
        <div className='contGralForm'> 
            <div>
                <h3 className='tituloForm'>Formulario de contacto</h3>
            </div>
            <div className='divContForm'>
            <form ref={form} onSubmit={sendEmail} className='contForm'>
                <label for='nombre'>Nombre:</label><br></br> 
                <input type='text' id='nombre' value={nombre} name='nombre' onChange={(e) => setNombre(e.target.value)}/><br></br>                 
                <label for='email'>Email:</label><br></br> 
                <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>                 
                <label for='asunto'>Asunto:</label><br></br> 
                <input type='text' id='asunto' name='asunto' value={asunto} onChange={(e) => {setAsunto(e.target.value)}}/><br></br>
                <label for='mensaje'>Mensaje:</label><br></br> 
                <textarea id='mensaje' name='mensaje' value={mensj} onChange={(e) => setMensj(e.target.value)}/><br></br>

                <button type='submit' className='btnEnviar'>Enviar</button>
            </form>
            </div>
            
        </div>
    )
}

export default FormularioContacto