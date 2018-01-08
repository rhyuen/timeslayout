import React, {Component} from "react";
import styled from "styled-components";

const RootContainer = styled.div`
    width: 100%;
    display: flex;    
    flex-direction: column;    
    align-items: center;    
    text-align: center; 
`;
const Title = styled.div`
    font-size: 50px;
    font-weight: bold;
    padding: 2vh;
    max-width: 66%;    
    font-family: "Times New Roman";   
`;
const SubTitle = styled.div`
    padding: 1vh;
    max-width: 66%;    
    font-family: "Times New Roman";   
    font-size: 18px;
`;
const Author = styled.div`
    padding: 1vh;
    max-width: 66%;    
    font-family: "Times New Roman";   
    font-size: 14px;
`;
const TagCloud = styled.div`
    padding: 2vh;
    max-width: 66%;    
`;
export default () => (
    <RootContainer>
        <Title>Summary title, a Summary.</Title>
        <SubTitle>Here lies a brief abstract of what will soon follow as you scroll down the page.  More words means the result is better because it's better.</SubTitle>
        <Author>By <strong>FirstName LastName</strong> {new Date().toLocaleString()}</Author>
        <TagCloud>Share Bar</TagCloud>
    </RootContainer>
);