import React from "react";
import '../static/CSS/frameworks.css'
import flask from '../static/graphics/Flask.png'
import spring from '../static/graphics/spring.png'
import jinja from '../static/graphics/jinja.png'

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
                    <img className="language-card-image" src="https://cdn.worldvectorlogo.com/logos/react-1.svg"/>
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