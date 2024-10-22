import React from 'react'
import './cv.css';
import DoneIcon from '@mui/icons-material/Done';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Curriculum() {
    return (
        <div className='conGralCV'>
            <div className='contCV'>
                <div className='contIzq'>
                    <h4>Herramientas:</h4>
                    <p><DoneIcon style={{fontSize: "small"}}/> ReactJs ⭐⭐⭐</p>
                    <p><DoneIcon className='iconCheck'/> ReactJs ⭐⭐⭐</p>
                    <p><DoneIcon className='iconCheck'/> ReactJs ⭐⭐⭐</p>
                    <p><DoneIcon className='iconCheck'/> ReactJs ⭐⭐⭐</p>
                </div>
                <div className='contDer'>
                    <h4>Proyectos:</h4>
                <p><AddCircleIcon/> ReactJs ⭐⭐⭐</p>
                <p><AddCircleIcon/> ReactJs ⭐⭐⭐</p>
                <p><AddCircleIcon/> ReactJs ⭐⭐⭐</p>
                <p><AddCircleIcon/> ReactJs ⭐⭐⭐</p>
                </div>
            </div>
        </div>
    )
}

export default Curriculum