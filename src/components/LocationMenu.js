import React, {useContext, useEffect, useState} from 'react';
import Navbar from './Navbar';
import Characters from './Characters';
import fetchCharacters from '../services/api';
import { GlobalContext } from '../context/GlobalContext';
import '../estilos/location.css'


const LocationMenu = () => {

  const {onClickSetUrl, url} = useContext(GlobalContext)


    const [characters, setCharacters] = useState([]);
    const [name, setName] = useState("")
    const [arrayOfResidents, setArrayOfResidents] = useState([]);
    const [makeCall, setMakeCall] = useState(false); 
    const [loading, setLoading] = useState(0); 


    useEffect(() => {
      importarLocation();
  }, [])

    const importarLocation = async() => {
        try {
          const response = await fetchCharacters(url);
          setName(response.data.name)
          setArrayOfResidents(response.data.residents)
          setMakeCall(true)
        } catch (error) {
          console.log(error)
        }
      }
      
      const importarResidents = async (arrayOfR) => {
        const response = await Promise.all(arrayOfR.map(e => fetch(e).then(response => response.json()).then(data => {return data})))
        setCharacters(response)
        setMakeCall(false)
        setLoading(1)
      }
          
      if(makeCall) {
        importarResidents(arrayOfResidents)
      }

  return (
    loading === 0 ?
    <>
    <Navbar brand="Rick & Morty Wiki"/>
    <div className='TituloDiv'>
        <a href="/" className="button">Atras</a>
        <h1 className='title'>{name}</h1>
    </div>
    <div className="spinner"> <span>Loading...</span> <div className="half-spinner"></div> </div>
    </>
    :
    <>
    <Navbar brand="Rick & Morty Wiki"/>
    <div className='TituloDiv'>
        <a href="/" className="button">Atras</a>
        <h1 className='title'>{name}</h1>
    </div>
    <div className='contenedorTarjetas'>
        <Characters characters={characters} onLink={onClickSetUrl}/>
    </div>
    </>
  );
}

export default LocationMenu