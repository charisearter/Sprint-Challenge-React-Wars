// Write your Character component here
import React from 'react';



function Character (props) {
    return (
        
        <div>
            <img src={props.data.image} alt={props.data.name}/>
            <h1>Name: {props.data.name}</h1>
            <h2>Status: {props.data.status}</h2>
            <p>Species: {props.data.species}</p>
            <p>Type:{props.data.type}</p>
            <p>Gender:{props.data.gender}</p>
            <p>Has appeared in {props.data.episode.length()} episode(s)</p>

        </div>
    )
}

export default Character;

