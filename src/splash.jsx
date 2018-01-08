import React, {Component} from "react"; 
import styled from "styled-components";
import SummaryContentTitle from "./summarycontenttitle.jsx";
import SummaryHeader from "./summaryheader.jsx";


const SplashContainer = styled.div`
    width: 100%;    
    height: 100vh;
    background: lavender;
    box-sizing: border-box;
    margin: 0;
    padding: 0;    
    display: flex;
    position: relative;
`;

const Summary = styled.div`
    display: flex;    
    flex-direction: column;
    width: 50%;
`;

const SummaryContent = styled.div`
    background: white;
    height: 95vh;
    display: flex;     
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const Picture = styled.div`
    background: lavender;
    width: 50%;
`;
const PictureSubtitle = styled.div`
    width: 100%;    
    height: 4vh;
    position: absolute;
    bottom: -4vh;
    left: 0;
    text-align: right;    
    font-size: 14px;
    box-sizing: border-box;    
    padding: 1vh 1vh;
`;

export default () => (
    <SplashContainer>        
       <Summary>
        <SummaryHeader/>           
        <SummaryContent>
           <SummaryContentTitle/>
        </SummaryContent>
       </Summary>
       <Picture></Picture>
       <PictureSubtitle>A blurb of text for the picture subtitle goes here.</PictureSubtitle>
    </SplashContainer>
)
