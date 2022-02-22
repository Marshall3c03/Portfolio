import React from "react";
import { ProjectsData } from "./ProjectsData";
import '../static/CSS/projectscollection.css'
import upArrow from '../static/graphics/links/up-arrow.svg'

const ProjectsCollection = ()=>{

    const handleGotoTop = ()=>{
        console.log("GotoTop pressed")
        var header = document.getElementById("header-id");
        header.scrollIntoView();
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
            <div className="arrow-container">
                <img className="up-arrow" src={upArrow} onClick={handleGotoTop}/>
                <p className="up-arrow-text">Return to Top</p>
            </div>
        </div>
    );
}

export default ProjectsCollection;