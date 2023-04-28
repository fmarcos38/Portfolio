import React from 'react';
import "./estilos.css";

function FormularioContacto() {
    return (
        <div className='contGralForm'> 
            <form action='mailto:fmarcos.23@gmail.com' method='post' className='contForm'>
                <label for='nombre'>Nombre:</label><br></br> 
                <input type='text' id='nombre' name='nombre'/><br></br>                 
                <label for='email'>Email:</label><br></br> 
                <input type='email' id='email' name='email'/><br></br>                 
                <label for='asunto'>Asunto:</label><br></br> 
                <input type='text' id='asunto' name='asunto'/><br></br>
                <label for='mensaje'>Mensaje:</label><br></br> 
                <textarea id='mensaje' name='mensaje'/><br></br>

                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default FormularioContacto