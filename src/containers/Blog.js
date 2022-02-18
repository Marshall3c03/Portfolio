import React from "react";
import Header from "./Header";

const Blog = ()=>{

    return(
        <>
            <Header/>
            <h1>Blog</h1>
            <p>These are a few things ive learned</p>
            <h3>Languages</h3>
            <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
            </ul>
            <h3>FrameWorks</h3>
            <ul>
                <li>React</li>
                <li>Flask</li>
                <li>Spring</li>
            </ul>
        </>
    );
};

export default Blog;