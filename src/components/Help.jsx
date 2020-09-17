import React from 'react'
import { Link } from "react-router-dom";
import logo from "../img/cat2.jpg"; 

export default function Help() {
    return (
        <div>
            <div className="left">
            <Link to="/">
            <img src={logo} alt="logo" className="img_Logo" title="back to home page"/>
            </Link>
        </div> 
            <h2>If you need help or have questions please contact me</h2>
            <h3><a href = "mailto: abc@example.com"><span>myemail@google.com</span></a></h3>
        </div>
    )
}
