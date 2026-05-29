import React from 'react'

function Carrusel({ imag1, imag2, imag3 }) {
    const imagenes = [imag1, imag2, imag3].filter(Boolean);

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {imagenes.map((imagen, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={imagen}>
                        <img src={imagen} className="d-block w-100" alt={`Mar del Plata ${index + 1}`} />
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carrusel
