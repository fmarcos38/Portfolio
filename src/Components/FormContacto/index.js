import React, { useRef, useState } from 'react';
import "../LandingPage/botones.scss";
/* envio de email */
import emailjs from 'emailjs-com';
import "./estilos.css";

function FormularioContacto() {

    //estados
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensj, setMensj] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if(nombre && email && asunto && mensj){
            emailjs.sendForm(
                process.env.REACT_APP_SERVICE, 
                process.env.REACT_APP_TEMPLATE, 
                form.current, 
                process.env.REACT_APP_PUBLIC
            )
            .then((result) => {
                console.log(result.text);
                setIsSent(true);
                setNombre("");
                setEmail("");
                setAsunto("");
                setMensj("");
                alert("Mail enviado !!");
            }, (error) => {
                console.log(error.text);
                setError('Error al enviar el mensaje. Intenta de nuevo más tarde.');
            });
        }else{
            alert("Complete todos los datos !!")
        }
    };


    return (
        <div className='contGralForm'> 
            <div>
                <h3 className='tituloForm'>Formulario de contacto</h3>
            </div>
            {
                isSent ? (
                    <p>Gracias!! Tu mensaje ha sido enviado.</p>
                ) : (
                    <div className='divContForm'>
                        <form ref={form} onSubmit={sendEmail} className='contForm'>
                            <label for='nombre'>Nombre:</label><br></br>
                            <input
                                type='text'
                                name="user_name"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <br></br>
                            <label for='email'>Email:</label><br></br>
                            <input
                                type='email'
                                name="user_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br></br>
                            <label for='asunto'>Asunto:</label><br></br>
                            <input
                                type='text'
                                id='asunto'
                                value={asunto}
                                onChange={(e) => { setAsunto(e.target.value) }}
                            />
                            <br></br>
                            <label for='mensaje'>Mensaje:</label><br></br>
                            <textarea
                                name="message"
                                value={mensj}
                                onChange={(e) => setMensj(e.target.value)}
                            />
                            <br></br>

                            <button type='submit' className='btnEnviar'>Enviar</button>
                        </form>
                    </div>
                )
            }
            {error && <p>{error}</p>}       
        </div>
    )
}

export default FormularioContacto