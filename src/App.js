//https://restcountries.eu/rest/v2/all

import React, { useReducer, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import axios from 'axios'

import { ContextProvider } from './components/Context'
import reducer from './components/reducer'
import GlobalStyle from './theme/GlobalStyles'
import theme from './theme/Theme'

import Main from './components/Main'
import { countries } from './countries' 

const initalState = { 
  mistakes: 0,
  gameStatus: "gameOn"
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState)
  const value = {state, dispatch}

  useEffect(() => {
    const countryListFromAPI = axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const wordToGuess = response.data[Math.floor(Math.random() * countries.length)]
          .name
          .toLowerCase()
        const wordToGuessArray = [...wordToGuess].map((letter) => {
          if (letter === " ") {
            return(
              {character: letter, guessed: true}
            )
          }
          return(
            {character: letter, guessed: false}
          )
        })
        dispatch({
          type: "loadWordToGuessArray",
          payload: {wordToGuess, wordToGuessArray}
        })

      })
  }, [])

  console.log(state)
  if (state.gameStatus === 'gameLost') {
    return(
      <div>
        GAME OVER
      </div>
    )
  }

  if (state.gameStatus === 'gameWon') {
    return(
      <div>
        YOU WON
      </div>
    )
  }

  if (!state.wordToGuessArray) {
    return(
      <div>
        LOADING
      </div>
    )
  }

  return(
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContextProvider value={value}>
          <Wrapper>
            <Main />
          </Wrapper>
        </ContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App