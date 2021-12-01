import React, { useEffect, useState, useContext} from "react";
import styled, { css } from 'styled-components';
import { useLocation, useNavigate, Outlet, Link} from 'react-router-dom';
import "./resume.css";
import { Article, BackgroundFill, Button} from './styled_components';
import { Context } from './ThemeContext';
import sunset_cliffs from "./photos/sunset_cliffs.jpg";
import { Container, Row, Col, Image} from "react-bootstrap";
import PhotoRow from "./PhotoRow"

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const photos = importAll(require.context('./photos', false, /\.(png|jpe?g|svg)$/));

const PhotoPage = () => {
    const [darkModeContext, dispatch] = useContext(Context);
    let toSet = darkModeContext.darkmode !== undefined ? darkModeContext.darkmode : true;
    const [darkMode, setDarkMode] = useState(toSet); 

    const changeDarkMode = () => {
        setDarkMode(!darkMode);
        let newDarkMode = !darkModeContext.darkmode;
        // let newDarkMode = !darkMode;
        dispatch({type: 'UPDATE_THEME', darkmode: newDarkMode})
    }
    
    return (
        <BackgroundFill darkMode={darkMode}>
            <Container fluid >
                <PhotoRow left={'sunset_cliffs.jpg'} right={'lucerne.jpg'}/>
                <PhotoRow left={'owl_butterfly.jpg'} right={'german_field.jpg'}/>
                <PhotoRow left={'lucernesunrise.jpg'} right={'double.jpg'}/>
                <PhotoRow left={'mrecho.jpg'} right={'cat.jpg'}/>
                <PhotoRow left={'channel_islands.jpg'} right={'brandon.jpg'}/>
                <PhotoRow left={'grindelwald.jpg'} right={'best_sunset.jpg'}/>
            </Container>
        </BackgroundFill> 
    );
}

export default PhotoPage;