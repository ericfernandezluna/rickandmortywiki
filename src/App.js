import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import fetchCharacters from './services/api';
import './App.css'

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({})
  const [name, setName] = useState("")
  const [page, setPage] = useState("")
  const [arrayOfResidents, setArrayOfResidents] = useState([]);
  const [makeCall, setMakeCall] =useState(false); 

  const importar = async (url) => {
    try{
      const response = await fetchCharacters(url);
      setCharacters(response.data.results)
      setInfo(response.data.info)
      setPage(0)}
    catch (error) {console.log(error)}
  }

  
  const importarResidents = async (arrayOfR) => {
    const response = await Promise.all(arrayOfR.map(e => fetch(e).then(response => response.json()).then(data => {return data})))
    setCharacters(response)
    setMakeCall(false)
    setPage(1)
  }

  const importarLocation = async(url) => {
    try {
      const response = await fetchCharacters(url);
      setName(response.data.name)
      setArrayOfResidents(response.data.residents)
      setMakeCall(true)
      

    } catch (error) {
      console.log(error)
    }
  }

  if(makeCall) {
    importarResidents(arrayOfResidents)
  }


  const onLink = (url) => {
    importarLocation(url)
  }

  const onPrevious = () =>{
    importar(info.prev)
  }

  const onNext = () =>{
    importar(info.next)
  }

  useEffect(() => {
    importar('https://rickandmortyapi.com/api/character');
  }, [])

  return (  
    page === 0 ?
    <>
      <Navbar brand="Rick & Morty Wiki"/>
      <div className='TituloDiv'>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/></div>
      <div className='contenedorTarjetas'>
        <Characters characters={characters} onLink={onLink}/>
      </div>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    </>
    :
    <>
    <Navbar brand="Rick & Morty Wiki"/>
    <div className='TituloDiv'>
        <a href="/" class="button">Atras</a>
        <h1 className='title'>{name}</h1>
    </div>
    <div className='contenedorTarjetas'>
        <Characters characters={characters} onLink={onLink}/>
    </div>
    </>
  );
}

export default App;
