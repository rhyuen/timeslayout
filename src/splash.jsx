import React, {Component} from "react"; 
import styled from "styled-components";


const SplashContainer = styled.div`
    width: 100%;    
    height: 100vh;
    background: lavender;
    box-sizing: border-box;
    margin: 0;
    padding: 0;    
    display: flex;
`;

const Summary = styled.div`
    display: flex;    
    flex-direction: column;
    width: 50%;
`;

const SummaryHeader = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;    
    justify-content: space-between;
`;
const SummaryContent = styled.div`
    background: white;
    height: 95vh;
    display: flex;     
    flex-direction: column;
    justify-content: center;
`;

const Picture = styled.div`
    background: lavender;
    width: 50%;
`;


export default () => (
    <SplashContainer>        
       <Summary>
        <SummaryHeader>
            <div>root</div>
            <div>title</div>
            <div>share</div>
        </SummaryHeader>
        <SummaryContent>
            <div>Summary Title</div>
            <div>Summary Blurb</div>
            <div>Author and details</div>
            <div>Share Bar</div>
        </SummaryContent>
       </Summary>
       <Picture></Picture>
    </SplashContainer>
)
