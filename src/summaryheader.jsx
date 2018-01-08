import React, {Component} from "react";
import styled from "styled-components";

const Root = styled.div`
    width: 100%;
    height: 5vh;   
    background: white;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    box-sizing: border-box;
`;

const SummaryItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0vh 4vh;
    color: gray;
`;

export default () => (
    <Root>
        <SummaryItem>Home</SummaryItem>
        <SummaryItem>Sub-home</SummaryItem>
        <SummaryItem>Share</SummaryItem>                
    </Root>
);