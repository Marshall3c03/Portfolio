import React from "react";
import Header from "./Header";
import '../static/CSS/profile.css'
import Education from "../components/Education";


const Profile = ()=>{

    return(
        <div>
            <Header/>
            <div className="profile-component">
                <h1 className="headings">Profile</h1>
                <p className="content">My name is Craig Marshall</p>
            </div>
            <Education/>
            <div className="work-component">
                <h1 className="headings">Work Experience</h1>
                <p className="content">My name is Craig Marshall</p>
            </div>
        </div>
    );
};

export default Profile;