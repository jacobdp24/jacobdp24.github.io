import React, { useEffect, useState, useContext } from "react";
import styled, { css } from "styled-components";
import { useLocation, useNavigate, Outlet, Link } from "react-router-dom";
import "./resume.css";
import { BackgroundFill, Button } from "./styled_components";
import { Context } from "./ThemeContext";
import { Container, Row, Col, Image } from "react-bootstrap";
import PhotoRow from "./PhotoRow";

const PhotoPage = () => {
  const [darkModeContext, dispatch] = useContext(Context);
  let toSet =
    darkModeContext.darkmode !== undefined ? darkModeContext.darkmode : true;
  const [darkMode, setDarkMode] = useState(toSet);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    let newDarkMode = !darkModeContext.darkmode;
    dispatch({ type: "UPDATE_THEME", darkmode: newDarkMode });
  };

  return (
    <BackgroundFill darkMode={darkMode}>
      <div>
        <div
          style={{
            position: "relative",
            left: "24%",
            width: "50%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            to="/"
            state={{ darkMode: darkMode }}
            style={{ textDecoration: "none" }}
          >
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <h1>Jacob Doering-Powell</h1>
            </div>
          </Link>
          <div
            style={{
              margin: "-5px",
              marginLeft: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {darkMode ? (
              <>
                <Button darkMode onClick={changeDarkMode}>
                  <span role="img" aria-label="smiling_sun">
                    🌞
                  </span>
                </Button>
                <p style={{ marginLeft: "10px" }}>
                  Click emoji to switch to light mode
                </p>
              </>
            ) : (
              <>
                <Button darkMode onClick={changeDarkMode}>
                  <span role="img" aria-label="smiling_moon">
                    🌚
                  </span>
                </Button>
                <p style={{ marginLeft: "10px" }}>
                  Click emoji to switch to dark mode
                </p>
              </>
            )}
          </div>
        </div>
        <Container fluid style={{ paddingTop: "45px" }}>
          <PhotoRow left={"sunset_cliffs.jpg"} right={"lucerne.jpg"} />
          <PhotoRow left={"owl_butterfly.jpg"} right={"german_field.jpg"} />
          <PhotoRow left={"lucernesunrise.jpg"} right={"double.jpg"} />
          <PhotoRow left={"mrecho.jpg"} right={"cat.jpg"} />
          <PhotoRow left={"channel_islands.jpg"} right={"brandon.jpg"} />
          <PhotoRow left={"grindelwald.jpg"} right={"best_sunset.jpg"} />
        </Container>
      </div>
    </BackgroundFill>
  );
};

export default PhotoPage;
