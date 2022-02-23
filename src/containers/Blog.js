import React from "react";
import Header from "./Header";
import { BlogData } from "../components/BlogData";
import '../static/CSS/blog.css'

const Blog = ()=>{

   
   return(
        <div>
            <Header/>
            <div className="blog-component">
                <h1 className="page-title">Blog</h1>
                <div className="posts">
                    {BlogData.map((item, index)=>{
                        return(
                            <div className="blog-entry" key={index}>
                                <h2 className="blog-entry-title">{item?.Title}</h2>
                                <p className="blog-date">{item?.date}</p>
                                <p>{item?.paragraph1}</p>
                                <p>{item?.paragraph2}</p>
                                <p>{item?.paragraph3}</p>
                                <p>{item?.paragraph4}</p>
                                <p>{item?.paragraph5}</p>
                                <p>{item?.paragraph6}</p>
                                <p>{item?.paragraph7}</p>
                                <p>{item?.paragraph8}</p>
                                <p>{item?.paragraph9}</p>
                                <p>{item?.paragraph10}</p>
                            </div>
                        )})
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Blog;