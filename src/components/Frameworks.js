import React from "react";
import '../static/CSS/frameworks.css'
import flask from '../static/graphics/skills/Flask.png'
import spring from '../static/graphics/skills/spring.png'
import jinja from '../static/graphics/skills/jinja.png'
import react from '../static/graphics/skills/react.png'

const Frameworks = ()=>{

    return(
        <div id="frameworks-id" className="frameworks-component">
           <h1 className="frameworks-text">Frameworks</h1>
           <div className="languages-cards-container">
                <div className="frameworks-card">
                    <h2 className="language-card-text">Flask</h2>
                    <img className="language-card-image" src={flask}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">React</h2>
                    <img className="language-card-image" src={react}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">Spring</h2>
                    <img className="language-card-image" src={spring}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">Jinja</h2>
                    <img className="language-card-image" src={jinja}/>
                </div>
            </div>
        </div>
    );
}

export default Frameworks;