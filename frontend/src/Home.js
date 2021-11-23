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
  // const [darkMode, setDarkMode] = useState(true);
  const [darkModeContext, dispatch] = useContext(Context);
  let navigate = useNavigate();
  let navType = useNavigationType();
  const location = useLocation()
  let history = createBrowserHistory();

  // useEffect(() => {
  //   let unlisten = history.listen(({ location, action }) => {
  //       console.log("in home")
  //       console.log(action, location.pathname, location.state);
  //       if (location.state) {
  //           console.log("location state in useEffect")
            
  //       }
  //       navigate(location.pathname, {state: {darkMode: darkMode}})
  //       // window.location.reload(true);
  //   });
  // })




  // let toSet = true
  // if (location.state) {
  //     console.log("has location.state")
  //     console.log(location.state.darkMode)
  //     // console.log(navType)
  //     // if (navType === "POP") {
  //     //     console.log('pop')
  //     // }
  //     toSet = location.state.darkMode
  // } else {
  //     toSet = true
  // }
  
  const changeDarkMode = () => {
    // setDarkMode(!darkMode);
    let newDarkMode = !darkModeContext.darkmode;
    dispatch({type: 'UPDATE_THEME', darkmode: newDarkMode})
  }
  

  return (
      <Container darkMode={darkModeContext.darkmode}>
          <Header align="center">Jacob Doering-Powell</Header>
          <Content align="center">
            <a href="https://github.com/jacobdp24">programming</a> | <Link to='/resume' state={{darkMode: darkModeContext.darkmode}} >resume</Link> | <a href="photos.html">photography</a>
          </Content>    
          {darkModeContext.darkmode ? <Button darkMode onClick={changeDarkMode}><span role="img" aria-label="smiling_sun">🌞</span></Button> 
                    : <Button darkMode onClick={changeDarkMode}><span role="img" aria-label="smiling_moon">🌚</span></Button>
          }
          <Outlet />
      </Container>
  );
}

export default Home;
