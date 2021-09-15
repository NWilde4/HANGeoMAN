import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: black;
    font-family: 'Gochi Hand', cursive;
    color: white;

    @media (max-width: 900px) {
      color: yellow;
    }
  }
`

export default GlobalStyle