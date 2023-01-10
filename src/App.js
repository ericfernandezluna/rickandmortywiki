import React, {useEffect, useState, useContext} from 'react';
import './App.css'
import StartMenu from './components/StartMenu';
import LocationMenu from './components/LocationMenu';
import { GlobalContext } from './context/GlobalContext';

function App() {

  const {pageto1, page} = useContext(GlobalContext)

  return (
    page === 0 ?
    <StartMenu pageto1={pageto1}/>
    :
    <LocationMenu/>
  );
}

export default App;