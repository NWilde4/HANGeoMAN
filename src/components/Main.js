import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'

import LetterList from './LetterList'
import WordToGuess from './WordToGuess'
import ImageContainer from './ImageContainer'

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

const Main = () => {
  const { state } = useContext(Context)

  return(
    <MainWrapper>
      <Title>HANGEOMAN</Title>
      <ImageContainer />
      <LetterList />
      <WordToGuess />
    </MainWrapper>
  )
}

export default Main