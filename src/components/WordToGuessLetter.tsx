import React from 'react'
import styled from 'styled-components'

import { WordToGuessArray } from '../types'

const Character = styled.div<{ space?: boolean }>`
  margin: 0.4rem;
  padding: 0.4rem;
  font-size: 6rem;
  width: 4rem;
  height: 6rem;
  border-bottom: ${props => props.space ? 'none' : '0.4rem solid white'};

  @media (max-width: 800px) {
    height: ${props => props.space ? '0' : '6rem'};
    flex-basis: ${props => props.space ? '100%' : 'auto'};
  }

`

const WordToGuessLetter = ({ letter }: {letter: WordToGuessArray}) => {
  if (letter.character ===' ') {
    return(<Character space>{letter.character}</Character>)
  }
  if (letter.guessed) {
    return(<Character>{letter.character.toUpperCase()}</Character>)
  }
  return(<Character></Character>)
}

export default WordToGuessLetter