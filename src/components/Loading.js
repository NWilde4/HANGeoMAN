import React from 'react'
import styled from 'styled-components'
import { SpinningCircles } from 'react-loading-icons'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`

const Loading = () => {
  return(
    <Wrapper>
      <SpinningCircles fill='white' stroke='white' />
    </Wrapper>
  )
}

export default Loading