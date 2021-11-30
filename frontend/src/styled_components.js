import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: none;
  border-radius: 3px;
  font-size:40px;
  border:none;
  margin:10px;
  padding:0;
  cursor: pointer;
`

export const Container = styled.div`
  padding: 40px;
  font-family: Arial;
  text-align: center;
  position: absolute; 
  top: 0; 
  right: 0; 
  bottom: 0; 
  left: 0;
  background-color: ${ ({darkMode}) => (darkMode ? '#191A19': '#FEF5ED')};
  color: ${ ({darkMode}) => (darkMode ? '#d8e9a8': '#ADC2A9')};
`
export const Header = styled.h1`
  font-weight: bold;
  font-size:50px;
`

export const Content = styled.p`
  font-size:30px;
`
export const Article = styled.article`
    margin:1em auto;
    max-width:40em;
    padding:0.62em;
    font:1.2em/1.62 sans-serif;
    right: 0; 
    left: 0;
    background-color: ${ ({darkMode}) => (darkMode ? '#191A19': '#FEF5ED')};
    color: ${ ({darkMode}) => (darkMode ? '#d8e9a8': '#ADC2A9')};
`
export const BackgroundFill = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${ ({darkMode}) => (darkMode ? '#191A19': '#FEF5ED')};
    color: ${ ({darkMode}) => (darkMode ? '#d8e9a8': '#ADC2A9')};
`