import React from 'react'
import styled from 'styled-components'

import LetterList from './LetterList'
import WordToGuess from './WordToGuess'
import ImageContainer from './ImageContainer'
import Message from './Message'
import NewGameButton from './NewGameButton'

const Title = styled.h1`
  font-size: 5rem;
  margin: 1rem;
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Main = ({ startNewGame }) => {

  return(
    <MainWrapper>
      <Title>HANGEOMAN</Title>
      <Message />
      <NewGameButton startNewGame={startNewGame} />
      <ImageContainer />
      <LetterList />
      <WordToGuess />
    </MainWrapper>
  )
}

export default Main