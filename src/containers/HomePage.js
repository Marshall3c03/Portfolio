import React from "react";
import Frameworks from "../components/Frameworks";
import Languages from "../components/Languages";
import Projects from "../components/Projects";
import '../static/CSS/homepage.css'

import Header from "./Header";

const HomePage = ()=>{

   
    return(
        <div>
            <Header/>
            <Languages/>
            <Frameworks/>
            <Projects/>
        </div>
    );
};

export default HomePage;