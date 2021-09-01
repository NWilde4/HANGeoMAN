import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'

const NonClickedLetter = styled.div`
  margin: 0.2rem;
  padding: 0.2rem;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: red;
  }
` 
const ClickedLetter = styled.div`
  margin: 0.2rem;
  padding: 0.2rem;
  font-size: 2rem;
  text-decoration: line-through;
  color: grey;
` 

const Letter = ({ letter }) => {
  const [clicked, setClicked] = useState(false)
  const { state, dispatch } = useContext(Context)

  const handleClick = () => {
    setClicked(true)
    if (!state.wordToGuess.includes(letter)) {
      dispatch({
        type: 'increaseMistakesCount',
        payload: letter
      })      
    } else {
      dispatch({
        type: 'revealLetters',
        payload: letter
      })
    }
  }

  if (!clicked) {
    return(
      <NonClickedLetter onClick={handleClick}>
        {letter.toUpperCase()}
      </NonClickedLetter>
    )
  }

  return(
    <ClickedLetter>
      {letter.toUpperCase()}
    </ClickedLetter>
  )
}

export default Letter