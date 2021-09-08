import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'

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