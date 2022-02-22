import React from "react";
import '../static/CSS/projects.css'
import premLogo from '../static/graphics/premierLeagueProjectLogo.png'
import helloworld from '../static/graphics/helloworldlogo.png'

const Projects = ()=>{

    return(
        <div className="projects-component">
            <h1 className="projects-text">Projects</h1>
            <div className="three-projects">
                <div className="part1">
                    <h1>Part 1</h1>
                    <img src={premLogo} width="150px"/>
                </div>
                <div className="part2">
                    <h1>Part 1</h1>
                    <img src={helloworld} width="150px"/>
                </div>
                <div className="part3">
                    <h1>Part 1</h1>
                </div>
            </div>
        </div>
    );
}

export default Projects;