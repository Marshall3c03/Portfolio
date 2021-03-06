import React from 'react'
import premLogo from '../static/graphics/premlogoWbackground.png'
import helloworld from '../static/graphics/helloworldlogo.png'
import monkeychef from '../static/graphics/monkeychef.png'
import svelteFootball from '../static/graphics/svelteApp.png'
import comingsoon from '../static/graphics/comingsoon.png'

export const ProjectsData = [
    {
        onClick: ()=>{console.log(window.location.href = 'https://github.com/Marshall3c03/MonkeyChef')},
        cName: 'project-avatar',
        projectName: "Svelte Football Quiz",
        image: svelteFootball
    },
    {
        onClick: ()=>{window.location.href = 'https://github.com/Marshall3c03/MonkeyChef'},
        cName: 'project-avatar',
        projectName: "Monkey Chef",
        image: monkeychef
    },
    {
        onClick: ()=>{window.location.href = 'https://github.com/Marshall3c03/BBC_Hello_World'},
        cName: 'project-avatar',
        projectName: "BBC Hello World",
        image: helloworld

    },
    {
        onClick: ()=>{window.location.href = 'https://github.com/Marshall3c03/SportsLeagueWebApp'},
        cName: 'project-avatar',
        projectName: "Premier League Sports Application",
        image: premLogo,
        lang: "python"
    },
    {
        onClick: ()=>{console.log("Project Coming Soon")},
        cName: 'project-avatar',
        projectName: "ComingSoon",
        image: comingsoon
    },
    {
        onClick: ()=>{console.log("Project Coming Soon")},
        cName: 'project-avatar',
        projectName: "ComingSoon",
        image: comingsoon
    },
    {
        onClick: ()=>{console.log("Project Coming Soon")},
        cName: 'project-avatar',
        projectName: "ComingSoon",
        image: comingsoon
    },
    {
        onClick: ()=>{console.log("Project Coming Soon")},
        cName: 'project-avatar',
        projectName: "ComingSoon",
        image: comingsoon
    },
    {
        onClick: ()=>{console.log("Project Coming Soon")},
        cName: 'project-avatar',
        projectName: "ComingSoon",
        image: comingsoon
    },
    {
        onClick: ()=>{console.log("Project Coming Soon")},
        cName: 'project-avatar',
        projectName: "ComingSoon",
        image: comingsoon
    }
]