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
        var languages = document.getElementById("languages-id");
        languages.scrollIntoView();
    } 
    
    const handleFrameWorks = ()=>{
        navigate('/')
        console.log("Clicked Frameworks")
        var frameworks = document.getElementById("frameworks-id");
        frameworks.scrollIntoView();
    }
    
    const handleProjects = ()=>{
        navigate('/')
        console.log("Clicked Projects")
        var projects = document.getElementById("projects-id");
        projects.scrollIntoView();
    }

    return(
        <>
            <div className="header-container">
                <div className="logo">
                    <img src={logo} onClick={handleFaceClick} width="200px"/>
                </div>
                <div className="career">
                    <ul>
                        <li onClick={handleLanguages}>Language</li>
                        <li onClick={handleLanguages}>Frameworks</li>
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