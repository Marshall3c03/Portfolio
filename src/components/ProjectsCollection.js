import React from "react";
import '../static/CSS/projectscollection.css'
import comingsoon from '../static/graphics/comingsoon.png'

const ProjectsCollection = ()=>{

    const handlePremierLeagueProject = ()=>{
        console.log("Premier League project clicked")
        window.location.href = 'https://github.com/Marshall3c03/SportsLeagueWebApp'
    }

    const handleHelloWorldProject = ()=>{
        console.log("Hello World project clicked")
        window.location.href = 'https://github.com/Marshall3c03/BBC_Hello_World'
    }

    const handleMonkeyChefProject = ()=>{
        console.log("Monkey Chef project clicked")
        window.location.href = 'https://github.com/Marshall3c03/MonkeyChef'
    }

    return(
        <div id="allprojects-id" className="all-projects-component">
            <h1 className="allprojects-text">All Projects</h1>
            <div className="test">
                <div className="all-projects-container">
                    <div className="project-avatars">
                        <img className="project-avatar" src={comingsoon}/>
                        <img className="project-avatar" src={comingsoon}/>
                        <img className="project-avatar" src={comingsoon}/>
                        <img className="project-avatar" src={comingsoon}/>
                        <img className="project-avatar" src={comingsoon}/>
                        <img className="project-avatar" src={comingsoon}/>
                        <img className="project-avatar" src={comingsoon}/>
                        <img className="project-avatar" src={comingsoon}/>
                        <img className="project-avatar" src={comingsoon}/>
                        <img className="project-avatar" src={comingsoon}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsCollection;