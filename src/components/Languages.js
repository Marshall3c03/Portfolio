import React from "react";
import '../static/CSS/languages.css'
import python from '../static/graphics/skills/python.png'
import javascript from '../static/graphics/skills/JS.png'
import java from '../static/graphics/skills/java.png'
import psql from '../static/graphics/skills/psql.png'

const Languages = ()=>{

    return(
        <div id="languages-id" className="languages-component">
           <h1 className="languages-text">Languages</h1>
           <div className="languages-cards-container">
                <div className="language-card">
                    <h2 className="language-card-text">Python</h2>
                    <img className="language-card-image" src={python}/>
                </div>
                <div className="language-card">
                    <h2 className="language-card-text">JavaScript</h2>
                    <img className="language-card-image" src={javascript}/>
                </div>
                <div className="language-card">
                    <h2 className="language-card-text">Java</h2>
                    <img className="language-card-image" src={java}/>
                </div>
                <div className="language-card">
                    <h2 className="language-card-text">PSQL</h2>
                    <img className="language-card-image" src={psql}/>
                </div>
           </div>
        </div>
    );
}

export default Languages;