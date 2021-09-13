import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import { Context } from './Context'

const pulsate = keyframes`
  0% {
    font-size: 2rem;
  }
  50% {
    font-size: 2.2rem; 
  }
  100% {
    font-size: 2rem; 
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
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
` 
const Button = styled.button`
  color: white;
  background: none;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 2rem;
  cursor: pointer;
  animation: ${pulsate} 1s linear infinite, ${appear} 3s linear 1;

  &:hover {
    font-size: 2.2rem;
    color: red;
  }

  &:active {
    animation: none;
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