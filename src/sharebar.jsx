import React, {Component} from "react";
import styled from "styled-components";

const Root = styled.div`
    margin-top: 2vh;
    display: flex;
`;
const CircleContainer = styled.div`
    width: 4vh;
    height: 4vh;
    background: black;    
    border-radius: 50%;
    margin: 0.5vw;    
    &:hover{
        background: gray;
    }
`;
const CircleText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100%;
    font-size: 12px;
`;

export default () => {
    const letters = "FTPMS";
    const allofthem = letters.split("").map((item, index) => (
        <CircleContainer key = {index}>
            <CircleText>{item}</CircleText>
        </CircleContainer>
    ));
    return <Root>{allofthem}</Root>;
};