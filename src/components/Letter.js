import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import { Context } from './Context'

const NonClickedLetter = styled.div`
  margin: 0.4rem;
  padding: 0.4rem;
  font-size: 4rem;
  cursor: pointer;

  &:hover {
    color: red;
  }
  &:active {
    color: red;
  }
`
const ClickedLetter = styled.div`
  margin: 0.4rem;
  padding: 0.4rem;
  font-size: 4rem;
  color: grey;
`

const Letter = ({ letter }) => {
  const [clicked, setClicked] = useState(false)
  const { state, dispatch } = useContext(Context)

  useEffect(() => {
    setClicked(false)
  }, [state.wordToGuess])

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

  if (state.gameStatus === 'gameOn' && !clicked) {
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