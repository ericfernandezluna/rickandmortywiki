import React from "react";
import '../estilos/characters.css'

const Characters = ({characters, onLink}) => {

  
  return(
    <>
    {
      characters.map((item, index) => (
        <div className='Tarjeta' key={index}>
          <div>
            <img src={item.image} className='contenedorImagen' alt=""/>
          </div>
          <div className='divcolumna'>
            <h5 className='contenedorTexto'>{item.name}</h5>
            <p className='contenedorTexto'>{item.species}</p>
            <button className="buttonchar" onClick={() => onLink(item.location.url)}>{item.location.name}</button>
          </div>
        </div>
      ))
    }
    </>
  )
}

export default Characters