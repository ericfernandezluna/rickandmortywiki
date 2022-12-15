import axios from 'axios';


const fetchCharacters = async (url) => {
  
  const response = await axios.get(url);
  return response;
    
};

export default fetchCharacters;