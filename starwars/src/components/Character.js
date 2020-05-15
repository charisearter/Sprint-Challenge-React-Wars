// Write your Character component here
import React from 'react';
import styled from 'styled-components'
import StyledDiv from './StyledDiv'
import StyledH1 from './StyledH1'
import StyledH2 from './StyledH2'
import StyledP from './StyledP'
import StyledImg from './StyledImg'

function Character (props) {
    
    return (
        
        <StyledDiv>
            <StyledImg src={props.data.image} alt={props.data.name}/>
            <StyledH1>Name: {props.data.name}</StyledH1>
            <StyledH2>Status: {props.data.status}</StyledH2>
            <StyledP>Species: {props.data.species}</StyledP>
            <StyledP>Origin: {props.data.origin.name}</StyledP>
            <StyledP>Location: {props.data.location.name}</StyledP>
            <StyledP>Gender: {props.data.gender}</StyledP>
            <StyledP>Has appeared in {props.data.episode.length} episode(s)</StyledP>

        </StyledDiv>
    )
}

export default Character;

