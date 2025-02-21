import React, { useEffect, useState, useContext} from "react";
import styled, { css } from 'styled-components'
import { useLocation, useNavigate, Outlet, Link} from 'react-router-dom'
import "./resume.css";
import { Article, BackgroundFill, Button} from './styled_components'
import { Context } from './ThemeContext'
import {pdfResume} from "./resume/Jacob_Doering-Powell_resume.pdf";

const Resume = () => {

    const [darkModeContext, dispatch] = useContext(Context);
    let toSet = darkModeContext.darkmode !== undefined ? darkModeContext.darkmode : true;
    const [darkMode, setDarkMode] = useState(toSet); 

    const changeDarkMode = () => {
        setDarkMode(!darkMode);
        let newDarkMode = !darkModeContext.darkmode;
        dispatch({type: 'UPDATE_THEME', darkmode: newDarkMode})
    }
    
    return (
        <BackgroundFill darkMode={darkMode}>
            <Article darkMode={darkMode}>
                <Link to='/' state={{darkMode: darkMode}} style={{ textDecoration: 'none' }}>
                    <div style={{top: ".3em"}}>
                        <h1 style={{marginTop: '-20px'}}>Jacob Doering-Powell</h1>
                    </div>
                </Link>
                {/* <ul>
                    <a href={require("./resume/Jacob_Doering-Powell_resume.pdf")} target="_blank"><li><b>View Full Resume</b></li></a>
                </ul> */}

                <ul id="navbar">
                    <a href="https://www.linkedin.com/in/jacob-doering-powell-a03651123/
"><li><b>linkedin</b></li></a>
                </ul>
                <ul id="navbar">
                    <a href="https://github.com/jacobdp24"><li><b>Github Link</b></li></a>
                </ul>
                <p>I can be reached at jacobdoeringpowell(at)gmail(dot)com</p>
                <h3>Interests</h3>
                <p>I love programming, taking my dog to the beach, lifting weights, photography, hiking, traveling, playing basketball. Keeping my life as simple as possible.</p>
                <h3>Education</h3>
                <ul>
                    <li><b>B.S.</b> Computer Science w/ a specialization in Bioinformatics. University of California, San Diego. [3.68 GPA] [Dec 2020]</li>
                </ul>
                <h3>Engineering Principles</h3>
                <ul>
                    <li><b>Simple solutions first</b>, use them as a baseline for adding complexity later.</li>
                    <li><b>Long and expressive variable names</b>, helps people read and understand code.</li>
                    <li><b>Find low hanging fruit</b>, high impact features with wide breadth can be found in most systems.</li>
                    <li><b>Remove code duplication wherever possible</b>, make a function or class, put it in a library and simplify your life.</li>
                    <li><b>Set a standard when there is none</b>, make your life easier when you want to build.</li>
                </ul>
                <h3>Work Experience</h3>
                <ul>
                    <li><b><a href="https://www.calicolabs.com">Calico Life Sciences</a></b> Data and Software Engineering @San Francisco. Creating scalable, high-performance data systems to drive cutting-edge biological research.</li>
                    <li><b><a href="https://www.empiricotx.com/">Empirico</a></b> Bioinformatics Engineering @San Diego. Built bioinformatics and software tools for finding drug targets with translational genetics</li>
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
                <div style={{textAlign:'center'}}>
                    {darkMode ? <Button darkMode onClick={changeDarkMode}><span role="img" aria-label="smiling_sun">🌞</span></Button> 
                        : <Button darkMode onClick={changeDarkMode}><span role="img" aria-label="smiling_moon">🌚</span></Button>
                    }
                </div>
            </Article>
        </BackgroundFill>
    );
}

export default Resume;