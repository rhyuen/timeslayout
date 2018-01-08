import React, {Component} from "react";
import Splash from "./splash.jsx";
import Content from "./content.jsx";
import Footer from "./footer.jsx";
import styled from "styled-components";


class App extends Component{
    state = {
        splashImage : ""
    }

    componentDidMount = () => {
        const images = require.context("./images", false, /\.(png|jpg)/);
        const usableImages = images.keys().map(images);        
        this.setState(prevState =>(
            {splashImage:usableImages[0]}
        ));
    }
    render(){
        return (
            <div className = "root">    
                <Splash pictureUrl = {this.state.splashImage} />
                <Content/>      
                <Footer/> 
            </div>
        )
    }
}

export default App;