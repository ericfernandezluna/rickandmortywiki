import React, {useContext} from 'react';
import '../estilos/characters.css'
import { GlobalContext } from '../context/GlobalContext';

const Characters = ({characters}) => {

  const {onClickSetUrl, url} = useContext(GlobalContext)

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
            <button className="buttonchar" onClick={() => {
              if(item.location.url === "") {
                alert('No existe la location')
                } else {onClickSetUrl(item.location.url)}}}>{item.location.name}</button>
          </div>
        </div>
      ))
    }
    </>
  )
}

export default Characters