import React, { useState } from 'react'
import styled from 'styled-components'
import { SpinningCircles } from 'react-loading-icons'

const Flag = styled.img`
  width: 16rem;
  border: 0.2rem solid white;
`

const FlagContainer = ({ countryFlagUrl }: {countryFlagUrl: string}) => {
  const [flagLoaded, setFlagLoaded] = useState(false)

  return(
    <>
      <Flag
        style={{ display: flagLoaded ? 'block' : 'none' }}
        src={countryFlagUrl}
        onLoad={() => setFlagLoaded(true)}
      />
      {!flagLoaded && <SpinningCircles fill='white' stroke='white' />}
    </>
  )

}

export default FlagContainer