import React, {Component} from "react";
import ContentSidePanel from "./contentsidepanel.jsx";
import styled from "styled-components";
import content from "./data/content.json";

const ContentContainer = styled.div`
    margin-top: calc(4vh + 4vh);
    align-self:center;
    display: flex;
    width: 1024px;    
    justify-content: center;    
`;
const ContentElements = styled.div`
    width: 65%;    
    box-sizing: border-box;
    padding-right: 15%;
    padding-bottom: 8vh;    
    border-bottom: 1px solid rgba(0,0,0,0.3);
`;
const ContentElementsItem = styled.p`    
    color: gray;
    line-height: 3vh;
    font-size: 14px;
    margin-top: 0;
`;

export default () => (
   <ContentContainer>
    <ContentElements>
        {
            content.data.split("\n").map(item => (
                <ContentElementsItem>{item}</ContentElementsItem>
            ))
        }     
    </ContentElements>
    <ContentSidePanel/>        
   </ContentContainer>
);
