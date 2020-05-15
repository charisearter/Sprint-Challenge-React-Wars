import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios' //importing axios

import Character from './components/Character'


const App = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then((response) => {
          const theCharacterList = response.data.results;
            console.log(theCharacterList);
            setData(theCharacterList);
        })//end then
    },[]);//end useEffect
  
  return (
    
    <div className="App">
       <h1 className="Header">Characters</h1>
      {data.map((data, id) => <Character key = {id} data = {data} />)}
     
      <button>Prev</button><button>Next</button>
    </div>
  );
}

export default App;
