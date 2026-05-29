import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./estilos.css";

function FormularioContacto() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensj, setMensj] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (nombre && email && asunto && mensj) {
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
                    setError("");
                }, (error) => {
                    console.log(error.text);
                    setError('Error al enviar el mensaje. Intenta de nuevo mas tarde.');
                });
        } else {
            setError("Completa todos los campos para enviar el mensaje.");
        }
    };

    return (
        <div className='contGralForm'>
            <div className='formIntro'>
                <span>Contacto</span>
                <h3 className='tituloForm'>Hablemos de tu proximo proyecto</h3>
                <p>Escribime por una propuesta, una consulta tecnica o una oportunidad laboral.</p>
            </div>

            {isSent ? (
                <p className='formSuccess'>Gracias. Tu mensaje fue enviado correctamente.</p>
            ) : (
                <div className='divContForm'>
                    <form ref={form} onSubmit={sendEmail} className='contForm'>
                        <div className='formField'>
                            <label htmlFor='nombre'>Nombre</label>
                            <input
                                id='nombre'
                                type='text'
                                name="user_name"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className='formField'>
                            <label htmlFor='email'>Email</label>
                            <input
                                id='email'
                                type='email'
                                name="user_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='formField'>
                            <label htmlFor='asunto'>Asunto</label>
                            <input
                                type='text'
                                id='asunto'
                                name='subject'
                                value={asunto}
                                onChange={(e) => { setAsunto(e.target.value) }}
                            />
                        </div>
                        <div className='formField'>
                            <label htmlFor='mensaje'>Mensaje</label>
                            <textarea
                                id='mensaje'
                                name="message"
                                rows='5'
                                value={mensj}
                                onChange={(e) => setMensj(e.target.value)}
                            />
                        </div>

                        {error && <p className='formError'>{error}</p>}
                        <button type='submit' className='btnEnviar'>Enviar mensaje</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default FormularioContacto
