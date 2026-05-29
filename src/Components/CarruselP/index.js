import React from 'react'

function CarruselP({ imag1, imag2, imag3, imag4, imag5, carouselId = "carouselExampleAutoplaying", titulo = "Proyecto" }) {
    const imagenes = [imag1, imag2, imag3, imag4, imag5].filter(Boolean);

    if (!imagenes.length) {
        return null;
    }

    return (
        <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {imagenes.map((imagen, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={imagen}>
                        <img src={imagen} className="d-block w-100" alt={`${titulo} captura ${index + 1}`} />
                    </div>
                ))}
            </div>
            {imagenes.length > 1 && (
                <>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </>
            )}
        </div>
    )
}

export default CarruselP
