import React from 'react'
import styled from 'styled-components'

const RevealedLetter = styled.div`
  margin: 0.2rem;
  padding: 0.2rem;
  font-size: 3rem;
  border-bottom: 0.2rem solid white;
  width: 2rem;
  height: 3rem;
`
const HiddenLetter = styled.div`
  margin: 0.2rem;
  padding: 0.2rem;
  font-size: 3rem;
  border-bottom: 0.2rem solid white;
  width: 2rem;
  height: 3rem;
`

const Space = styled.div`
  margin: 0.2rem;
  padding: 0.2rem;
  font-size: 3rem;
  width: 2rem;  
  height: 3rem;
`

const WordToGuessLetter = ({ letter }) => {
  if (letter.character ===" ") {
    return(<Space>{letter.character}</Space>)    
  }
  if (letter.guessed) {
    return(<RevealedLetter>{letter.character.toUpperCase()}</RevealedLetter>)
  }
  return(<HiddenLetter></HiddenLetter>)
}

export default WordToGuessLetter