import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'
import FlagContainer from './FlagContainer'

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

const ImageContainer = () => {
  const { state } = useContext(Context)

  return(
    <ImageWrapper>
      {(state.gameStatus === 'gameOn')
        ? <Image src={`images/hangman${state.mistakes}.png`} />
        : <FlagContainer countryFlagUrl={state.countryFlagUrl} />
      }
    </ImageWrapper>
  )

}

export default ImageContainer