import React from "react";
import { ProjectsData } from "./ProjectsData";
import '../static/CSS/projectscollection.css'
import comingsoon from '../static/graphics/comingsoon.png'
import premLogo from '../static/graphics/premlogoWbackground.png'
import helloworld from '../static/graphics/helloworldlogo.png'
import monkeychef from '../static/graphics/monkeychef.png'

const ProjectsCollection = ()=>{

    const projects = ()=>{
        {ProjectsData.map((item, index)=>{
        return(
            <img onClick={()=> item.onClick()} key={index} className="project-avatar" src={item.image}/>
        )})}
    }
    
    return(
        <div id="allprojects-id" className="all-projects-component">
            <h1 className="allprojects-text">All Projects</h1>
            <div className="test">
                <div className="all-projects-container">
                    <div className="project-avatars">
                        {ProjectsData.map((item, index)=>{
                        return(
                            <img onClick={()=> item.onClick()} key={index} className="project-avatar" src={item.image}/>
                        )})}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsCollection;