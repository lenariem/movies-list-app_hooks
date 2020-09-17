import React from 'react'
import {Link} from "react-router-dom"
import CatNotFound from "../img/cat.jpg"


export default function NotFound() {
    return (
        <div>
            <h1>Page not found</h1>
           {/*  <CatNotFound style={{width: '450px'}}/> */}
            <img style={{width: '450px'}} src ={CatNotFound} alt="cat in cinema"/>
            <br /><br />
            <Link className="btn" to="/">Go back to home page</Link> 
        </div>
    )
}
