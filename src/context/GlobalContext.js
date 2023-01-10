import React, { createContext, useEffect, useState} from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

const [url, setUrl] = useState('https://rickandmortyapi.com/api/character'); 
const [page, setPage] = useState(0);

const onClickSetUrl = (url) => {
  setUrl(url)
  setPage(1)
}

  return (
    <GlobalContext.Provider value={{url, setUrl, onClickSetUrl, page, setPage}}> {children} </GlobalContext.Provider>
  );
};

export default GlobalProvider;