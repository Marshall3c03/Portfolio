import React from "react";
import logo from '../static/graphics/craigLogo.png'
import { useNavigate } from "react-router";
import '../static/CSS/header.css'

const Header = ()=>{

    const navigate = useNavigate()

    const handleFaceClick = ()=>{
        navigate('/')
    }

    const handleLanguages = ()=>{
        navigate('/')
        console.log("Clicked Languages")
        document.getElementById("languages").scrollIntoView();
    } 
    
    const handleFrameWorks = ()=>{
        navigate('/')
        console.log("Clicked Frameworks")
        document.getElementById("frameworks").scrollIntoView();
    }
    
    const handleProjects = ()=>{
        navigate('/')
        console.log("Clicked Projects")
        document.getElementById("projects").scrollIntoView();
    }

    return(
        <>
            <div className="header-container">
                <div className="logo">
                    <img src={logo} onClick={handleFaceClick} width="200px"/>
                </div>
                <div className="career">
                    <ul>
                        <li onClick={handleLanguages}>Languages</li>
                        <li onClick={handleFrameWorks}>FrameWorks</li>
                        <li onClick={handleProjects}>Projects</li>
                    </ul>
                </div>
                <div className="personals">
                    <ul>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;