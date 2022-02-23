import React from "react";
import Header from "./Header";
import '../static/CSS/profile.css'
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import CraigProfile from "../components/CraigProfile";


const Profile = ()=>{

    return(
        <div>
            <Header/>
            <CraigProfile/>
            <Education/>
            <WorkExperience/>
        </div>
    );
};

export default Profile;