import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components'
import { useLocation } from 'react-router-dom'

const Resume = () => {
    const location = useLocation()
    console.log(location.state)
    return (
        <div>
            <p>resume</p>
        </div>
    );
}

export default Resume;