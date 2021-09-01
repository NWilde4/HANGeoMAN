import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'


const Image = styled.img`
  color: white;
  width: 30%;
  filter: brightness(0) invert(1);
`

const ImageContainer = () => {
  const { state } = useContext(Context)

  return(
    <div>
      <Image src={`images/hangman${state.mistakes}.png`} />
    </div>
  )
}

export default ImageContainer