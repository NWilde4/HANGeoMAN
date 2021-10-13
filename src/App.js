//https://restcountries.eu/rest/v2/all

import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { ContextProvider } from './components/Context'
import reducer from './components/reducer'
import GlobalStyle from './theme/GlobalStyles'

import Header from './components/Header'
import Main from './components/Main'
import Loading from './components/Loading'

const initialState = { 
  mistakes: 0,
  gameStatus: "gameOn",
  gamesCount: {
    gamesWon: window.sessionStorage.getItem('gamesWon') | 0,
    gamesLost: window.sessionStorage.getItem('gamesLost') | 0
  }
}

const Wrapper = styled.div`
  text-align: center;
`

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}

  const startNewGame = (countryArray) => {
    const wordToGuess = countryArray[Math.floor(Math.random() * countryArray.length)]
      .name
      .toLowerCase()
      .normalize("NFD").replace(/\p{Diacritic}/gu, "")

    const wordToGuessArray = [...wordToGuess].map((letter) => {
      return (letter === " ") 
        ? {character: letter, guessed: true}
        : {character: letter, guessed: false}
    })

    dispatch({
      type: "loadWordToGuessArray",
      payload: {wordToGuess, wordToGuessArray}
    })
  }
 
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        const filteredCountries = response.data
          .filter(object => (object.name.length < 20))
        dispatch({
          type: "initializeCountries",
          payload: filteredCountries
        })
        startNewGame(filteredCountries)
      })
  }, [])

  return(
    <div>
      <GlobalStyle />
      <ContextProvider value={value}>
        <Wrapper>
          <Header />
          {(!state.wordToGuessArray)
            ? <Loading />
            : <Main startNewGame={startNewGame} />
          }
        </Wrapper>
      </ContextProvider>
    </div>
  )
}

export default App