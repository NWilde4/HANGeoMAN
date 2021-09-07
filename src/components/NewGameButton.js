import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'

const ButtonContainer = styled.div`
  font-size: 2rem;
  color: white;
  height: 3rem;
` 
const Button = styled.button`
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