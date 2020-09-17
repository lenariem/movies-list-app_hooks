import React from 'react'
import {Link} from "react-router-dom"


export default function Navigation() {
    return (
        <nav>
            <div className="menu">
                <Link to="/about" className="aboutLink">About</Link>
                <Link to="/help" className="helpLink">Help</Link>
            </div>
        </nav>
    )
}
