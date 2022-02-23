import React from "react";
import '../static/CSS/frameworks.css'
import flask from '../static/graphics/skills/Flask.png'
import spring from '../static/graphics/skills/spring.png'
import jinja from '../static/graphics/skills/jinja.png'
import npm from '../static/graphics/skills/npm.png'
import react from '../static/graphics/skills/react.png'
import node from '../static/graphics/skills/node.png'
import psql from '../static/graphics/skills/psql.png'
import mongodb from '../static/graphics/skills/mongodb.png'
import threeJs from '../static/graphics/skills/threejs.png'
import html from '../static/graphics/skills/html.png'
import css from '../static/graphics/skills/css.png'


const Frameworks = ()=>{

    return(
        <div id="frameworks-id" className="frameworks-component">
           <h1 className="frameworks-text">Frameworks</h1>
           <div className="frameworks-cards-container">
                <div className="frameworks-card">
                    <h2 className="language-card-text">React</h2>
                    <img className="language-card-image" src={react}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">Spring</h2>
                    <img className="language-card-image" src={spring}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">Flask</h2>
                    <img className="language-card-image" src={flask}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">NPM</h2>
                    <img className="language-card-image" src={npm}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">NodeJs</h2>
                    <img className="language-card-image" src={node}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">MongoDB</h2>
                    <img className="language-card-image" src={mongodb}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">PSQL</h2>
                    <img className="language-card-image" src={psql}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">ThreeJs</h2>
                    <img className="language-card-image" src={threeJs}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">HTML</h2>
                    <img className="language-card-image" src={html}/>
                </div>
                <div className="frameworks-card">
                    <h2 className="language-card-text">CSS</h2>
                    <img className="language-card-image" src={css}/>
                </div>
            </div>
        </div>
    );
}

export default Frameworks;