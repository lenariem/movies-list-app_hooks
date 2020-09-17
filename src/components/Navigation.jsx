import React from 'react'
import {Link} from "react-router-dom"


export default function Navigation() {
    return (
        <nav>
            <div className="menu">
                <Link to="/catalog" className="catalogLink">Catalog</Link>
                <Link to="/about" className="aboutLink">About</Link>
            </div>
        </nav>
    )
}
