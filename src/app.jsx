import React, {Component} from "react";
import Splash from "./splash.jsx";
import Content from "./content.jsx";
import Footer from "./footer.jsx";
import styled from "styled-components";


class App extends Component{

    render(){
        return (
            <div className = "root">    
                <Splash/>
                <Content/>      
                <Footer/> 
            </div>
        )
    }
}

export default App;