import React from 'react';
import {Link} from "react-router-dom";
import "../css/Navigation.css";


export default function Navigation() {
    return (
        <nav>
            <ul className="nav nav-pills justify-content-end">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/help" className="nav-link">Help</Link>
                </li>
            </ul>
        </nav>
    );
}
