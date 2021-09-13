import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'

const ScoreboardContainer = styled.div`
  font-size: 2rem;
  margin: 1rem;
  color: white;
  height: 2rem;
  display: flex;
  justify-content: space-between;
`

const ScoreItem = styled.div`
  margin: 0 1rem;
`

const Scoreboard = () => {
  const { state } = useContext(Context)

  return(
    <ScoreboardContainer>
      <ScoreItem>Won: {state.gamesCount.gamesWon}</ScoreItem>
      <ScoreItem>|</ScoreItem>
      <ScoreItem>Lost: {state.gamesCount.gamesLost}</ScoreItem>
    </ScoreboardContainer>
    )
}

export default Scoreboard