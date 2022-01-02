import React from 'react'
import styled from 'styled-components'

import LetterList from './LetterList'
import WordToGuess from './WordToGuess'
import ImageContainer from './ImageContainer'
import Message from './Message'
import NewGameButton from './NewGameButton'
import Scoreboard from './Scoreboard'

import { StartNewGameProp } from '../types'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Main = ({ startNewGame }: StartNewGameProp) => {

  return(
    <MainWrapper>
      <Scoreboard />
      <Message />
      <ImageContainer />
      <NewGameButton startNewGame={startNewGame} />
      <LetterList />
      <WordToGuess />
    </MainWrapper>
  )
}

export default Main