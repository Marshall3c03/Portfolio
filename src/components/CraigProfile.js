import React from "react";
import '../static/CSS/profile.css'

const CraigProfile = ()=>{

    return(
    <div className="profile-component">
        <h1 className="headings">Profile</h1>
        <div className="languages-cards-container">
            <div className="craig-card">
                <p className="profile-content">Hey my name is <b className="colour-orange">Craig Marshall</b> and I am a <b className="colour-orange">Junior Software Developer</b> with a background in the <b className="colour-orange">3D creative industry</b>. Accumulating <b className="colour-orange">3 years of experience</b> working with <b className="colour-orange">visualisation & engineering</b> companies, creating assets from <b className="colour-orange">concept</b> to <b className="colour-orange">finished product</b></p>
            </div>
            <div className="craig-card">
                <p className="profile-content">Throughout the pandemic I made the decision to <b className="colour-orange">pivot</b> in my career towards the <b className="colour-orange">Technology sector</b>. I completed an intense 16-week <b className="colour-orange">Software Development</b> course at <b className="colour-orange">CodeClan Edinburgh</b>. This has enabled me to learn <b className="colour-orange">key skills</b> which will enable me to <b className="colour-orange">achieve my goals</b> within this new <b className="colour-orange">industry</b>.</p>
            </div>
            <div className="craig-card">
                <p className="profile-content">Through my previous experience I have developed strong <b className="colour-orange">communication</b> and <b className="colour-orange">project handling</b> skills through interacting with <b className="colour-orange">clients</b> and <b className="colour-orange">colleagues</b>.</p>
            </div>
            <div className="craig-card">
                <p className="profile-content">I am looking to make an <b className="colour-orange">impact</b> within the <b className="colour-orange">technology</b> sector and further enhance the <b className="colour-orange">technical skills</b> I have gained over the past 5 months.</p>
            </div>
        </div>
    </div>
    );
}

export default CraigProfile;