import axios from 'axios';
import  CardList  from "./components.js";

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

const httpGetExample = async () => {
  try {
    const response = await axios.get(URL);  
    console.log('Datos recibidos:');
    console.log(response.data);
  } catch (error) {
    console.error('Error al hacer la solicitud:', error.message);
  }
};

 