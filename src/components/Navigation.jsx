import React from 'react'
import {Link} from "react-router-dom"
import logo from "../img/cat2.jpg"


export default function Navigation() {
    return (
        <nav>
            <div className="left">
                <Link to="/"><img src={logo} alt="logo"className="img_Logo"/></Link>
            </div>
            <div className="right">
                <Link to="/catalog">Catalog</Link>
            </div>
        </nav>
    )
}
