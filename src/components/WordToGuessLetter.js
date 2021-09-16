import React from 'react'
import styled from 'styled-components'

const Character = styled.div`
  margin: 0.4rem;
  padding: 0.4rem;
  font-size: 6rem;
  width: 4rem;
  height: 6rem;
  border-bottom: ${props => props.space ? 'none' : '0.4rem solid white'};
  flex-basis: ${props => props.space ? '100%' : 'auto'};

  @media (max-width: 999px) {
    margin: 0.2rem;
    padding: 0.2rem;
    font-size: 3.6rem;
    width: 2.6rem;
    height: ${props => props.space ? '0' : '3.6rem'};
  }

`

const WordToGuessLetter = ({ letter }) => {
  if (letter.character ===" ") {
    return(<Character space>{letter.character}</Character>)    
  }
  if (letter.guessed) {
    return(<Character>{letter.character.toUpperCase()}</Character>)
  }
  return(<Character></Character>)
}

export default WordToGuessLetter