import React from "react";
import { SidebarData } from "./SidebarData";
import { useNavigate } from "react-router-dom";
import email from '../static/graphics/email.svg'
import '../static/CSS/sidenav.css'

const SideNav = ( {})=>{

    const navigate = useNavigate();
    
    return(
        <>
        <nav className="nav-menu">
            <ul className="nav-menu-items">
                {SidebarData.map((item, index)=>{
                    return(
                        <li onClick={()=>item.onClick()} key={index} className={item.cName}>
                            <img className="navIcon" src={item.icon}/>
                        </li>
                    )})
                }
                <li><a href="mailto: dev.craigmarshall@gmail.com?subject=Contact Me From Portfolio"><img src={email} width="58px" /></a></li>
            </ul>
        </nav>
        </>
    );
};

export default SideNav;