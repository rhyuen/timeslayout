import React, {Component} from "react";
import styled from "styled-components";

const Root = styled.div`
    width: 35%;
    border-top: 1px solid rgba(0,0,0,0.1);
`;
const SideHeader = styled.div`
    box-sizing: border-box;
    margin: 0.5vh 0vh;
    margin-bottom: 2vh;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
`;

const SideItem = styled.div`
    width: 100%;
    background: lightblue;   
    display: flex; 
    margin-bottom: 2vh;

`;
const SideItemPic = styled.div`
    width: 8vh;
    height: 8vh;
    background: lavender;
    margin-right: 2vh;
`;
const SideItemDetails = styled.div`
`;

export default () => (
   <Root>
        <SideHeader>recommendations</SideHeader>
        <SideItem>
            <SideItemPic/>
            <SideItemDetails>Category<br/>asdf<br/>{new Date().toLocaleString()}</SideItemDetails>            
        </SideItem>
        <SideItem><SideItemPic/>asdf</SideItem>
        <SideItem>asdf</SideItem>
   </Root>
);