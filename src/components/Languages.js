import React from "react";
import '../static/CSS/languages.css'

const Languages = ()=>{

    return(
        <div className="languages-component">
           <h1 className="languages-text">Languages</h1>
           <div className="languages-cards-container">
                <div className="language-card">
                    <h2 className="language-card-text">Python</h2>
                    <img className="language-card-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"/>
                </div>
                <div className="language-card">
                    <h2 className="language-card-text">JavaScript</h2>
                    <img className="language-card-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png"/>
                </div>
                <div className="language-card">
                    <h2 className="language-card-text">Java</h2>
                    <img className="language-card-image" src="https://icon-library.com/images/java-icon-png/java-icon-png-2.jpg"/>
                </div>
                <div className="language-card">
                    <h2 className="language-card-text">PSQL</h2>
                    <img className="language-card-image" src="https://ih1.redbubble.net/image.1952945198.6602/mo,small,flatlay,product_square,600x600.jpg"/>
                </div>
           </div>
        </div>
    );
}

export default Languages;