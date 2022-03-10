import React from "react";
import flask from '../static/graphics/skills/Flask.png'
import spring from '../static/graphics/skills/spring.png'
import jinja from '../static/graphics/skills/jinja.png'
import npm from '../static/graphics/skills/npm.png'
import react from '../static/graphics/skills/react.png'
import node from '../static/graphics/skills/node.png'
import psql from '../static/graphics/skills/psql.png'
import mongodb from '../static/graphics/skills/mongodb.png'
import threeJs from '../static/graphics/skills/threejs.png'
import { FrameworksData } from "./FrameworksData";
import '../static/CSS/frameworks.css'


const Frameworks = ()=>{

    return(

        <div id="frameworks-id" className="frameworks-component">
           <h1 className="frameworks-text">Frameworks & Skills</h1>
           <div className="frameworks-cards-container">
                {FrameworksData.map((item, index)=>{
                    return(
                        <div className="frameworks-card">
                            <h2 className="frameworks-card-text">{item.name}</h2>
                            <img className="frameworks-card-image" src={item.image}/>
                        </div>
                    )})}
           </div>
        </div>
    );
}

export default Frameworks;