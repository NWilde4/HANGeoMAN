import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { ContextProvider, initialState } from './components/Context'
import reducer from './components/reducer'
import GlobalStyle from './theme/GlobalStyles'

import Header from './components/Header'
import Main from './components/Main'
import Loading from './components/Loading'

import { Country } from './types'

const Wrapper = styled.div`
  text-align: center;
`

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  const startNewGame = (countryArray: Array<Country>): void => {

    const country = countryArray[Math.floor(Math.random() * countryArray.length)]
    const wordToGuess = country.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')
    const countryFlagUrl = country.flagUrl

    const wordToGuessArray = [...wordToGuess].map((letter) => {
      return (letter === ' ')
        ? { character: letter, guessed: true }
        : { character: letter, guessed: false }
    })

    dispatch({
      type: 'loadWordToGuessArray',
      payload: { wordToGuess, wordToGuessArray, countryFlagUrl }
    })
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        const filteredCountries = response.data
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .filter((countryObject: any) => (countryObject.name.length < 20)) // So countries with unneccessarily long names are excluded
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((countryObject: any) => {
            return({ name: countryObject.name, flagUrl: countryObject.flags.svg })
          })
        dispatch({
          type: 'initializeCountries',
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
          {(state.wordToGuessArray.length === 0)
            ? <Loading />
            : <Main startNewGame={startNewGame} />
          }
        </Wrapper>
      </ContextProvider>
    </div>
  )
}

export default App