import React, { useEffect, useState, useContext} from "react";
import styled, { css } from 'styled-components';
import { useLocation, useNavigate, Outlet, Link} from 'react-router-dom';
import "./resume.css";
import { Article, BackgroundFill, Button} from './styled_components';
import { Context } from './ThemeContext';
import sunset_cliffs from "./photos/sunset_cliffs.jpg";
import { Container, Row, Col, Image} from "react-bootstrap";

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
            {/* <div className="container-fluid"> */}
            <Container fluid >
                <Row>
                    <Col style={{width: "50%", height: "100%", marginTop: '8px', verticalAlign: 'middle', float: 'left', padding: '0 4px'}}>
                        {/* <img src={photos['sunset_cliffs.jpg']} style={{width: "100%", height: "auto"}}></img> */}
                        <Image src={photos['sunset_cliffs.jpg']} fluid style={{width: "100%", height: "auto"}}/>
                        {/* <img src={photos['sunset_cliffs.jpg']} style={{width: "100%", height: "auto"}} /> */}
                    </Col>
                    <Col style={{width: "50%", height: "100%", marginTop: '8px', verticalAlign: 'middle', float: 'right', padding: '0 4px'}}>
                        <Image src={photos['lucerne.jpg']} fluid style={{width: "100%", height: "auto"}} />

                    </Col>
                </Row>
            </Container>
        </BackgroundFill> 
    );
}

export default PhotoPage;