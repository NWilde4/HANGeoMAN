import React from 'react'
import styled from 'styled-components'

const RevealedLetter = styled.div`
  margin: 0.4rem;
  padding: 0.4rem;
  font-size: 6rem;
  border-bottom: 0.4rem solid white;
  width: 4rem;
  height: 6rem;
`
const HiddenLetter = styled.div`
  margin: 0.4rem;
  padding: 0.4rem;
  font-size: 6rem;
  border-bottom: 0.4rem solid white;
  width: 4rem;
  height: 6rem;
`

const Space = styled.div`
  margin: 0.4rem;
  padding: 0.4rem;
  font-size: 6rem;
  width: 4rem;
  height: 6rem;
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