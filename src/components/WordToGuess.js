import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'
import WordToGuessLetter from './WordToGuessLetter'

const WordWrapper = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
`

const WordToGuess = () => {
  const { state } = useContext(Context)

  return(
    <WordWrapper>
      {state.wordToGuessArray.map((letter, index) => {
        return(<WordToGuessLetter key={index} letter={letter} />)
      })}
    </WordWrapper>
  )
}

export default WordToGuess