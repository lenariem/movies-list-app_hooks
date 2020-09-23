import React from 'react';
import {Link} from "react-router-dom";
import CatNotFound from "../img/cat.jpg";

export default function NotFound() {
	return (
		<div style = {{padding: "2%"}}>
			<h1>Sorry, the page is not found</h1>
			<img style={{width: '450px'}} src ={CatNotFound} alt="cat in cinema"/>
			<br /><br />
			<Link to="/">Go back to home page</Link>
		</div>
	);
}
