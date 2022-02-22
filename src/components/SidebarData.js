import React from 'react'
import github from '../static/graphics/links/github.svg'
import twitter from '../static/graphics/links/twitter.svg'
import linkedin from '../static/graphics/links/linkedin.svg'

export const SidebarData = [
    {
        onClick: ()=>{window.location.href = 'https://github.com/Marshall3c03'},
        icon: github,
        cName: 'nav-text'
    },
    {
        onClick: ()=>{window.location.href = 'https://github.com/Marshall3c03'},
        icon: twitter,
        cName: 'nav-text'
    },
    {
        onClick: ()=>{window.location.href = 'https://www.linkedin.com/in/marshall3c03/'},
        icon: linkedin,
        cName: 'nav-text'  
    }
]