import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/cat2.jpg";
import "../css/About.css";

export default function About() {
	return (
		<div className="aboutPage">
			<div className="left">
				<Link to="/">
					<img
						src={logo}
						alt="logo"
						className="img_Logo"
						title="back to home page"
					/>
				</Link>
			</div>
			<div className="aboutText" style = {{fontSize: "1.3rem"}}>
				<h2>This app can be used to manage an own movie list</h2>
				<br/>
				<ul> <i>You can:</i>
				<br/><br/>
					<li>add and delete items;</li>
					<li>mark as liked(click on movie name) and watched;</li>
					<li>filter and search in your list;</li>
					<li>add items from catalog to your list</li>
				</ul>
			</div>
		</div>
	);
}
