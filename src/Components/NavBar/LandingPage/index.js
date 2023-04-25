import React from 'react';
import "./landing.css";
import Navbar from '..';
import gif from './program.gif';

function LandingPage() {
    return (
        <div className='contLanding'>
            {/* navbar */}
            <Navbar/>

            <div className='contImagTexto'>
                <div className='contGif'>
                    <img src={gif} alt='not founf gif' className='gifP'/>
                </div>
                <div>
                    <span className='texto1'>Full Stack Developer</span>
                </div>
            </div>
            
        </div>
    )
}

export default LandingPage