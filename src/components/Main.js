import React from 'react'
import styled from 'styled-components'

import LetterList from './LetterList'
import WordToGuess from './WordToGuess'
import ImageContainer from './ImageContainer'
import Message from './Message'
import NewGameButton from './NewGameButton'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Main = ({ startNewGame }) => {

  return(
    <MainWrapper>
      <ImageContainer />
      <LetterList />
      <WordToGuess />
      <Message />
      <NewGameButton startNewGame={startNewGame} />
    </MainWrapper>
  )
}

export default Main