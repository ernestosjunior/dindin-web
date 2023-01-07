import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-image: linear-gradient(90.23deg, #05ede3 0.02%, #645ffb 99.63%);
  }
  
  a {
   text-decoration: none;
  }
`

export default GlobalStyle
