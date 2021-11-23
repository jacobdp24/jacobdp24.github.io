import React, { useEffect, useState, useContext} from "react";
import styled, { css } from 'styled-components'
import { useLocation, useNavigate, Outlet, Link} from 'react-router-dom'
import "./resume.css";
import { Article, BackgroundFill, Button} from './styled_components'
import { createBrowserHistory } from 'history';
import { Context } from './ThemeContext'

const Resume = () => {
    // console.log(Context)
    const [darkModeContext, dispatch] = useContext(Context);
    // const location = useLocation()
    // let history = createBrowserHistory();
    // let navigate = useNavigate();
    // let toSet = true
    // if (location.state) {
    //     toSet = location.state.darkMode
    //     // dispatch({type: 'UPDATE_THEME', toSet})
    // } 
    //const [darkMode, setDarkMode] = useState(toSet);
    const changeDarkMode = () => {
        //setDarkMode(!darkMode);
        let newDarkMode = !darkModeContext.darkmode;
        dispatch({type: 'UPDATE_THEME', darkmode: newDarkMode})
    }

    // useEffect(() => {
    //     let unlisten = history.listen(({ location, action }) => {
    //         console.log("in resume")
    //         console.log(action, location.pathname, location.state);
    //         navigate(location.pathname, {state: {darkMode: darkMode}})
    //     });
    // })

    return (
        <BackgroundFill darkMode={darkModeContext.darkmode}>
            <Article darkMode={darkModeContext.darkmode}>
                <Link to='/' state={{darkMode: darkModeContext.darkmode}}>
                    <div style={{top: ".3em"}}>
                        <h1 style={{marginTop: '-20px'}}>Jacob Doering-Powell</h1>
                    </div>
                </Link>
                <ul id="navbar">
                    <a href="https://github.com/jacobdp24"><li><b>Github Link</b></li></a>
                </ul>
                <p>If you'd like to contact me, I can be reached at jacobdoeringpowell(at)gmail(dot)com</p>
                <h3>Interests</h3>
                <p>I love bioinformatics, computer science, biology, and chemistry.</p>
                <h3>Education</h3>
                <ul>
                    <li><b>BSc.</b> Senior majoring in Computer Science w/ a specialization in Bioinformatics. University of California, San Diego. [3.7 GPA]</li>
                </ul>
                <h3>Work Experience</h3>
                <ul>
                    <li><b><a href="https://www.lji.org/faculty-research/labs/peters/#overview">Peters Lab</a></b> Machine Learning @LJI. IEDB tools development, predicting how peptides bind to MHC-I.</li>
                    <li><b>SurveyMonkey</b> @San Mateo. Software Engineering Intern on the SurveyPlatform Automation team.</li>
                    <li><b>City of San Diego</b> @Sustainability Department. Software Engineering Intern. Automated the collection, cleaning, and distribution of energy data.</li>
                    <li><b>Computer Science Tutor</b> @UCSD. CSE8A for Mia Minnes and Joe Politz</li>
                    <li><b>Kit Pogliano Lab</b> @UCSD. researched how different metabolic proteins are regulated in sporulating bacteria.</li>
                    <li><b>EntroGen Inc.</b> @Woodland Hills. Lab Assistant. Made qPCR assays for cancer prognosis and diagnosis.</li>
                </ul>
                <h3>Software</h3>
                <ul>
                    <li><b><a href="http://quantisolv.com">quantisolv</a></b> - machine learning for drug formulation.</li>
                </ul>
                {darkModeContext.darkmode ? <Button darkMode onClick={changeDarkMode}><span role="img" aria-label="smiling_sun">🌞</span></Button> 
                    : <Button darkMode onClick={changeDarkMode}><span role="img" aria-label="smiling_moon">🌚</span></Button>
                }
            </Article>
        </BackgroundFill>
    );
}

export default Resume;