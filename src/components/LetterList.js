import React from 'react'
import styled from 'styled-components'

import Letter from './Letter'

const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
const LetterListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const LetterList = () => {
  return(
    <LetterListWrapper>
      {alphabet.map(letter => {
        return(
          <Letter
            letter={letter}
            key={letter}
          />
        )
      })}
    </LetterListWrapper>
  )
}

export default LetterList