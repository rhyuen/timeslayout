import React, {Component} from "react";
import styled from "styled-components";
import content from "./data/content.json";

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
    display: flex; 
    margin-bottom: 2vh;    
    height: 8vh;
    box-sizing: border-box;   
`;
const SideItemPic = styled.div`
    box-sizing: border-box;    
    width: 8vh;    
    background: lavender;    
`;
const SideItemDetails = styled.div`     
    max-width: 65%;
    margin-left: 1vh;
    display: flex;
    flex-direction: column;
    justify-content: center;       
`;
const DetailsSubject = styled.div`
    text-transform: uppercase;
    font-size: 13px;
`;
const DetailsTitle = styled.div`
    font-size: 15px;
    ${SideItem}:hover & {
        text-decoration: underline;
    }
`;
const DetailsDate = styled.div`
    text.transform: uppercase;
    color: rgba(0,0,0,0.4);
    font-size: 13px;
`;

export default () => (
   <Root>
        <SideHeader>recommendations</SideHeader>
        {
            content.suggestions.map(sug => (
                <SideItem>
                    <SideItemPic/>
                    <SideItemDetails>
                        <DetailsSubject>{sug.subject}</DetailsSubject>
                        <DetailsTitle>{sug.title}</DetailsTitle>
                        <DetailsDate>{sug.date}</DetailsDate>
                    </SideItemDetails>            
                </SideItem>
            ))        
        }
   </Root>
);