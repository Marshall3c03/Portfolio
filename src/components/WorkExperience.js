import React from "react";
import '../static/CSS/profile.css'
import freelance from '../static/graphics/freelance.png'
import soluis from '../static/graphics/soluis.png'

const WorkExperience = ()=>{

    return(

    <div className="work-component">
        <h1 className="headings">Work Experience</h1>
        <div className="education-container">
            <div className="education">
                <img className="education-avatar" src={freelance}/>
                <div className="education-text">
                    <h1 className="education-institute">Various Companies</h1>
                    <p>(October 2018 - Sept 2021)</p>
                    <h3>FreeLance 3D Artist, London</h3>
                    <ul className="education-learnings">
                        <li><b className="colour-orange">Attention to detail</b> used extensively working with discerning <b className="colour-orange">clients</b></li>
                        <li>Strong <b className="colour-orange">client communication</b> in exporting <b className="colour-orange">client vision</b></li>
                        <li>Simultaneously <b className="colour-orange">managing</b> multiple projects</li>
                        <li>Ability to <b className="colour-orange">share ideas</b> with team but also  <b className="colour-orange">take direction</b> from others</li>
                    </ul>
                </div>
            </div>
            <div className="education">
                <img className="education-avatar" src={soluis}/>
                <div className="education-text">
                    <h1 className="education-institute">Soluis Group</h1>
                    <p>(June 2018 - Sept 2018)</p>
                    <h3>Real-Time Artist, Glasgow</h3>
                    <ul className="education-learnings">
                        <li><b className="colour-orange">Overcame challenges</b> using unfamiliar rendering techniques</li>
                        <li><b className="colour-orange">Implementation</b> of VR for client's immersive experience, further complimented by photo-realistic stills</li>
                        <li>Client's tight schedule meant <b className="colour-orange">project management</b> and <b className="colour-orange">time-keeping</b> were essential, however, all clients prerequisites were fulfilled</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default WorkExperience;