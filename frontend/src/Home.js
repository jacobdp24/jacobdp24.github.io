import logo from './logo.svg';
import './Home.css';
import React, { useEffect, useState, useContext } from "react";
import styled, { css } from 'styled-components'
import { Outlet, Link, useNavigate, useNavigationType} from 'react-router-dom';
import Resume from "./resume"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Container, Header, Content } from './styled_components'
import { useLocation } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { Context } from './ThemeContext'


function Home() {
  
  const [darkModeContext, dispatch] = useContext(Context);
  let toSet = darkModeContext.darkmode !== undefined ? darkModeContext.darkmode : true;
  const [darkMode, setDarkMode] = useState(toSet); 
  
  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    // let newDarkMode = !darkModeContext.darkmode;
    let newDarkMode = !darkMode
    dispatch({type: 'UPDATE_THEME', darkmode: newDarkMode})
  }
  

  return (
      <Container darkMode={darkMode}>
          <Header align="center">Jacob Doering-Powell</Header>
          <Content align="center">                                                                                                       
            <a href="https://github.com/jacobdp24">programming</a> | <Link to='/resume' state={{darkMode: darkMode}} >resume</Link> | <Link to='/photos' state={{darkMode: darkMode}} >photography</Link>
          </Content>                                                                                                        
          {darkMode ? <Button darkMode onClick={changeDarkMode}><span role="img" aria-label="smiling_sun">🌞</span></Button> 
                    : <Button darkMode onClick={changeDarkMode}><span role="img" aria-label="smiling_moon">🌚</span></Button>
          }
          <Outlet />
      </Container>
  );
}

export default Home;
