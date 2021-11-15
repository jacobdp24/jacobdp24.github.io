import logo from './logo.svg';
import './Home.css';
import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: none;
  border-radius: 3px;
  font-size:40px;
  border:none;
  margin:10px;
  padding:0;
  cursor: pointer;
`

const Container = styled.div`
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
const Header = styled.h1`
  font-weight: bold;
  font-size:50px
`

const Content = styled.p`
  font-size:30px
`

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
      <Container darkMode={darkMode}>
          <Header align="center">Jacob Doering-Powell</Header>
          <Content align="center">
            <a href="https://github.com/jacobdp24">programming</a> | <a href="resume.html">resume</a> | <a href="photos.html">photography</a>
          </Content>    
          {darkMode ? <Button darkMode onClick={changeDarkMode}>🌞</Button> 
                    : <Button darkMode onClick={changeDarkMode}>🌚</Button>
          }
        
      </Container>
  );
}

export default Home;
