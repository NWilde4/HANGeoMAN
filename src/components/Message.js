import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'

const MessageContainer = styled.div`
  font-size: 2rem;
  color: white;
  height: 2rem;
` 

const Message = () => {
  const { state } = useContext(Context)

  const gameStatus = state.gameStatus

  return(
    <MessageContainer>
      {(gameStatus === 'gameOn') ? null
       : (gameStatus === 'gameWon') ? "YOU WIN"
       : "GAME OVER"
      }
    </MessageContainer>
    )
}

export default Message