import React from "react";
import '../static/CSS/projects.css'
import premLogo from '../static/graphics/premierLeagueProjectLogo.png'
import helloworld from '../static/graphics/helloworldlogo.png'
import monkeychef from '../static/graphics/monkeychef.png'
import python from '../static/graphics/skills/python.png'
import javascript from '../static/graphics/skills/JS.png'
import java from '../static/graphics/skills/java.png'
import flask from '../static/graphics/skills/Flask.png'
import react from '../static/graphics/skills/react.png'
import jinja from '../static/graphics/skills/jinja.png'
import node from '../static/graphics/skills/node.png'
import psql from '../static/graphics/skills/psql.png'
import mongodb from '../static/graphics/skills/mongodb.png'
import threeJs from '../static/graphics/skills/threejs.png'
import html from '../static/graphics/skills/html.png'
import css from '../static/graphics/skills/css.png'


const Projects = ()=>{

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
        <div id="projects-id" className="projects-component">
            <h1 className="projects-text">Recent Projects</h1>
            <div className="three-projects">
                <div className="part1">
                    <h1 className="prem-project-title">Premier League Sports App</h1>
                    <img className="project-logo" src={premLogo} width="150px"/>
                    <div className="project-langauges">
                        <img className="proj-lang-avatar" src={python}/>
                        <img className="proj-lang-avatar" src={flask}/>
                        <img className="proj-lang-avatar" src={jinja}/>
                        <img className="proj-lang-avatar" src={psql}/>
                        <img className="proj-lang-avatar" src={css}/>
                        <img className="proj-lang-avatar" src={html}/>
                    </div>
                    <p className="project-description">Sports web application that allows users to input a set of teams from the premier league, add matches between teams to follow along with the real scores.</p>
                    <ul className="project-tasks">
                        <li>Consolidated knowledge of <b className="colour-orange">Python</b></li>
                        <li>Worked with <b className="colour-orange">PostgresSQL database</b> to store team data</li>
                        <li>Utilised <b className="colour-orange">Flask framework</b> to build the <b className="colour-orange">front-end</b> of the <b className="colour-orange">Web Application</b></li>
                        <li><b className="colour-orange">CSS</b> styling applied to improve the <b className="colour-orange">Web Applications aesthetics</b></li>
                    </ul>
                    <button onClick={handlePremierLeagueProject} className="button" role="button">View Project</button>
                </div>
                <div className="part2">
                    <h1 className="project-title">BBC Hello World</h1>
                    <img className="project-logo" src={helloworld} width="150px"/>
                    <div className="project-langauges">
                        <img className="proj-lang-avatar" src={javascript}/>
                        <img className="proj-lang-avatar" src={react}/>
                        <img className="proj-lang-avatar" src={mongodb}/>
                        <img className="proj-lang-avatar" src={node}/>
                        <img className="proj-lang-avatar" src={threeJs}/>
                        <img className="proj-lang-avatar" src={css}/>
                        <img className="proj-lang-avatar" src={html}/>
                    </div>
                    <p className="project-description colour-orange">Educational app for kids focussing on our solar system. Interactive elements along with 3D models, quizzes and audio to help keep them engaged.</p>
                    <ul className="project-tasks">
                        <li>Consolidated knowledge of <b className="colour-orange">JavaScript</b></li>
                        <li>Ran <b className="colour-orange">MongoDB</b> as our <b className="colour-orange">database</b> to understand <b className="colour-orange">NoSQL</b> databases</li>
                        <li>Used <b className="colour-orange">React</b> to help build our <b className="colour-orange">user interfaces</b> (learned to work with <b className="colour-orange">components</b>)</li>
                        <li>Further <b className="colour-orange">CSS</b> was learned to accommodate groups <b className="colour-orange">wireframe plans</b></li>
                    </ul>
                    <button onClick={handleHelloWorldProject} className="button" role="button">View Project</button>
                </div>
                <div className="part3">
                    <h1 className="project-title">Monkey Chef</h1>
                    <img className="project-logo" src={monkeychef} width="150px"/>
                    <div className="project-langauges">
                        <img className="proj-lang-avatar" src={javascript}/>
                        <img className="proj-lang-avatar" src={react}/>
                        <img className="proj-lang-avatar" src={node}/>
                        <img className="proj-lang-avatar" src={mongodb}/>
                        <img className="proj-lang-avatar" src={css}/>
                        <img className="proj-lang-avatar" src={html}/>
                    </div>
                    <p className="project-description colour-grey">A meal planner and recipe management web application. Allowing the user to efficiently plan their weekly meals.</p>
                    <ul className="project-tasks">
                        <li>Reinforced knowledge of <b className="colour-grey">JavaScript</b></li>
                        <li>Worked with a <b className="colour-grey">MongoDB database</b></li>
                        <li>Focused on following <b className="colour-grey">Industry Standards</b> throughout the project to build our confidence leaving <b className="colour-grey">CodeClan</b></li>
                        <li>Reinforced knowledge and competence with <b className="colour-grey">React</b> for front-end developement</li>
                        <li>Focused on a good <b className="colour-grey">User Experience</b>, using appealing graphics and layouts</li>
                    </ul>
                    <button onClick={handleMonkeyChefProject} className="button" role="button">View Project</button>
                </div>
            </div>
        </div>
    );
}

export default Projects;