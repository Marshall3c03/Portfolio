import React from "react";
import '../static/CSS/projects.css'
import premLogo from '../static/graphics/premierLeagueProjectLogo.png'
import helloworld from '../static/graphics/helloworldlogo.png'
import monkeychef from '../static/graphics/monkeychef.png'

const Projects = ()=>{

    return(
        <div id="projects-id" className="projects-component">
            <h1 className="projects-text">Projects</h1>
            <div className="three-projects">
                <div className="part1">
                    <h1 className="prem-project-title">Premier League Sports App</h1>
                    <img className="project-logo" src={premLogo} width="150px"/>
                </div>
                <div className="part2">
                    <h1 className="project-title">BBC Hello World</h1>
                    <img className="project-logo" src={helloworld} width="150px"/>
                </div>
                <div className="part3">
                    <h1 className="project-title">Monkey Chef</h1>
                    <img className="project-logo" src={monkeychef} width="150px"/>
                </div>
            </div>
        </div>
    );
}

export default Projects;