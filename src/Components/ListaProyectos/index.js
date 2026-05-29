import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import "./estilos.css";
import CardProyecto from '../CardProyecto';
import { getProyects } from '../../Redux/Actions';


function ListaProyectos() {

    const allProyects = useSelector(state => state.proyectos);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProyects());
    },[dispatch]);

    return (
        <div className='contListaP'>
            {
                allProyects.map((p, i) => {
                    return(
                        <div key={i} className='contListaP2'>
                            <CardProyecto  titulo={p.titulo} descripcion={p.descripcion} tecnologiasUtilizadas={p.tecnologiasUtilizadas}
                                linkGithubFront={p.linkGithubFront} linkGithubBack={p.linkGithubBack} linkURL={p.linkURL}
                                imag1={p.imag1} imag2={p.imag2} imag3={p.imag3} imag4={p.imag4} imag5={p.imag5}
                                carouselId={`carouselProyecto${i}`}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListaProyectos
