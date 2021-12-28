import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import { Context } from './Context'

const vibrate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  2% {
    transform: rotate(-4deg);
    color: grey;
  }
  4% {
    transform: rotate(0deg);
    color: white;
  }
  100% {
    transform: rotate(0deg);
  }
`

const appear = keyframes`
  0% {
    color: black;
  }
  50% {
    color: black;
  }
  100% {
    color: white; 
  }
`

const ButtonContainer = styled.div`
  color: white;
  height: 4rem;
  align-items: center;
`

const Button = styled.button`
  color: white;
  background: none;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 4rem;
  cursor: pointer;
  animation: ${vibrate} 2s linear infinite, ${appear} 3s linear 1;

  &:active {
  }
`

const NewGameButton = ({ startNewGame }) => {
  const { state } = useContext(Context)

  if (state.gameStatus === 'gameOn') {
    return (
      <ButtonContainer />
    )
  }

  return(
    <ButtonContainer>
      <Button onClick={() => startNewGame(state.countries)}>NEW GAME</Button>
    </ButtonContainer>
  )
}

export default NewGameButton