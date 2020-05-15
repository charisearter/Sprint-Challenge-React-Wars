import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios' //importing axios
import styled from 'styled-components'
import Character from './components/Character'
import StyledDiv from './components/StyledDiv'

const App = () => {
  const [data, setData] = useState('');
    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then((response) => {
          const theCharacterList = response.data.results;
            console.log(theCharacterList);
            setData(theCharacterList);
        })//end then
    },[]);//end useEffect
  const [ characterData ]= useState(theCharacterList)
  return (
    
    <div className="App">
      {characterData.map((character, id) => <Character key = {id} name = {character} />)}
      <h1 className="Header">Characters</h1>
      <Character data = {data}/>
    </div>
  );
}

export default App;
