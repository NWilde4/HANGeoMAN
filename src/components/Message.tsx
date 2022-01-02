import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'

const MessageContainer = styled.div`
  color: red;
  font-size: 5rem;
  margin: 1rem;
  height: 5rem;
`

const Message = () => {
  const { state } = useContext(Context)

  const gameStatus = state.gameStatus

  return(
    <MessageContainer>
      {(gameStatus === 'gameOn') ? null
        : (gameStatus === 'gameWon') ? 'YOU WIN'
          : 'GAME OVER'
      }
    </MessageContainer>
  )
}

export default Message