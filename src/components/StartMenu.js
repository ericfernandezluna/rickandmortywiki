import React, {useContext, useEffect, useState} from 'react';
import Navbar from './Navbar';
import Characters from './Characters';
import Pagination from './Pagination';
import fetchCharacters from '../services/api';
import { GlobalContext } from '../context/GlobalContext';

const StartMenu = ({pageto1}) => {

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({}) 
    const {onClickSetUrl, url} = useContext(GlobalContext)

    const importar = async (url) => {
        try{
          const response = await fetchCharacters(url);
          setCharacters(response.data.results)
          setInfo(response.data.info)
        }
        catch (error) {console.log(error)}
      }
    
    useEffect(() => {
        importar(url)
    }, [])

    
      const onPrevious = () =>{
        importar(info.prev)
      }
    
      const onNext = () =>{
        importar(info.next)
      }

  return(
   <>
      <Navbar brand="Rick & Morty Wiki"/>
      <div className='TituloDiv'>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/></div>
      <div className='contenedorTarjetas'>
        <Characters characters={characters} onLink={onClickSetUrl}/>
      </div>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    </>
  )
}

export default StartMenu