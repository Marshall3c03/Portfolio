import React from "react";
import Header from "./Header";
import '../static/CSS/profile.css'
import codeclan from '../static/graphics/codeclan.png'
import gcu from '../static/graphics/gcu.png'

const Profile = ()=>{

    return(
        <div>
            <Header/>
            <div className="profile-component">
                <h1 className="headings">Profile</h1>
                <p className="content">My name is Craig Marshall</p>
            </div>
            <div className="education-component">
                <h1 className="headings">Education</h1>
                <div className="education-container">
                    <div className="education">
                        <img className="education-avatar" src={codeclan}/>
                        <div className="education-text">
                            <h1 className="education-institute">CodeClan Edinburgh   (Sept 2021 - Feb 2022)</h1>
                            <h3>Professional Software Development - SQA Level 8 Qualification</h3>
                            <ul className="education-learnings">
                                <li>Learnt Fundamentals of Software Development</li>
                                <li>800 Hours Minimum of Coding</li>
                                <li>Solo & Team Projects</li>
                                <li>Learnt Python, JavaScript & Java Development Languages</li>
                                <li>Learnt Flask, Jinja, React & Spring Frameworks</li>
                            </ul>
                        </div>
                    </div>
                    <div className="education">
                        <img className="education-avatar" src={gcu}/>
                        <div className="education-text">
                            <h1 className="education-institute">Glasgow Caledonian University  (Sept 2016 - June 2018)</h1>
                            <h3>BSc 3D Visualisation & Animation - 2:1(HONS)</h3>
                            <ul className="education-learnings">
                                <li>Undertook Real-World Projects</li>
                                <li>Worked in Teams</li>
                                <li>Learnt 3DS Max, Maya, MudBox & Z-Brush 3D Modelling Softwares</li>
                                <li>Learnt Mental-Ray, Arnold, Corona & V-Ray Render Engines</li>
                                <li>Developed my Researching Skill</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="work-component">
                <h1 className="headings">Work Experience</h1>
                <p className="content">My name is Craig Marshall</p>
            </div>
        </div>
    );
};

export default Profile;