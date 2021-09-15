import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'

const ImageWrapper = styled.div`
  height: 17rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0;
`
const Image = styled.img`
  color: white;
  width: 16rem;
  filter: brightness(0) invert(1);
`

const Flag = styled.img`
  width: 16rem;
  border: 0.2rem solid white;
`

const ImageContainer = () => {
  const { state } = useContext(Context)

  const countryFlag = state.countries
    .find(country => (country.name.toLowerCase() === state.wordToGuess))
    .flag

  return(
    <ImageWrapper>
      {(state.gameStatus === 'gameOn') 
        ? <Image src={`images/hangman${state.mistakes}.png`} />
        : <Flag src={countryFlag} /> 
      }
    </ImageWrapper>
  )

}

export default ImageContainer