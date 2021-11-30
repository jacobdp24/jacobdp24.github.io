import React, { useEffect, useState, useContext} from "react";
import styled, { css } from 'styled-components'
import { useLocation, useNavigate, Outlet, Link} from 'react-router-dom'
import "./resume.css";
import { Article, BackgroundFill, Button} from './styled_components'
import { Context } from './ThemeContext'

const Resume = () => {

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
            <Article darkMode={darkMode}>
                <Link to='/' state={{darkMode: darkMode}}>
                    <div style={{top: ".3em"}}>
                        <h1 style={{marginTop: '-20px'}}>Jacob Doering-Powell</h1>
                    </div>
                </Link>
                <ul id="navbar">
                    <a href="https://github.com/jacobdp24"><li><b>Github Link</b></li></a>
                </ul>
                <p>I can be reached at jacobdoeringpowell(at)gmail(dot)com</p>
                <h3>Interests</h3>
                <p>Computer Science, Bioinformatics, Cheminformatics, Hiking, Photography, Traveling</p>
                <h3>Education</h3>
                <ul>
                    <li><b>BSc.</b> Computer Science w/ a specialization in Bioinformatics. University of California, San Diego. [3.7 GPA] [Dec 2020]</li>
                </ul>
                <h3>Engineering Principles</h3>
                <ul>
                    <li><b>Simple solutions first</b>, use them as a baseline for adding complexity later.</li>
                    <li><b>Long and expressive variable names</b>, lose time writing, gain time with readability, comprehension, and collaboration.</li>
                    <li><b>If it's done more than once write a function</b>, enhance readability and abstraction.</li>
                    <li><b>Meaningful function names</b>, if a function does not do what the name implies, it is a poor abstraction</li>
                </ul>
                <h3>Work Experience</h3>
                <ul>
                    <li><b><a href="https://www.empiricotx.com/">Empirico</a></b> Bioinformatics Engineering @San Diego. Bioinformatics and Software development for finding drug targets with translational genetics</li>
                    <li><b><a href="https://www.lji.org/faculty-research/labs/peters/#overview">Peters Lab</a></b> Machine Learning @LJI. IEDB peptide to MHC-I prediction tools development.</li>
                    <li><b><a href="https://www.momentive.ai/en/">Momentive</a></b> @San Mateo. Software Engineering Intern on the SurveyPlatform Automation team.</li>
                    <li><b>City of San Diego</b> @Sustainability Department. Software Engineering Intern. Automated the collection, cleaning, and distribution of energy data.</li>
                    <li><b>Computer Science Tutor</b> @UCSD. CSE8A for Mia Minnes and Joe Politz</li>
                    <li><b>Kit Pogliano Lab</b> @UCSD. researched how different metabolic proteins are regulated in sporulating bacteria.</li>
                    <li><b>EntroGen Inc.</b> @Woodland Hills. Lab Assistant. Made qPCR assays for cancer prognosis and diagnosis.</li>
                </ul>
                <h3>Software</h3>
                <ul>
                    <li><b><a href="https://pypi.org/project/pmbec/">PMBEC python package</a></b> - immunoinformatics package to make peptide to MHC binding energy covariance matrices.</li>
                </ul>
                {darkMode ? <Button darkMode onClick={changeDarkMode}><span role="img" aria-label="smiling_sun">🌞</span></Button> 
                    : <Button darkMode onClick={changeDarkMode}><span role="img" aria-label="smiling_moon">🌚</span></Button>
                }
            </Article>
        </BackgroundFill>
    );
}

export default Resume;