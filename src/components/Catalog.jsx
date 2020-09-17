import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/cat2.jpg";

export default function Catalog() {
    const [posts, setPosts] = useState([]);

    const fetchDatas = async () => {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await result.json();
        console.log(data);
        setPosts(data);
    };

    //after mounting of component is done
    useEffect(() => {
        fetchDatas();
    }, []);

    return (
        <div>
        <div className="left">
            <Link to="/">
            <img src={logo} alt="logo" className="img_Logo" title="back to home page"/>
            </Link>
        </div>
        <div className="catalogHeader">
            <h2>Movie ideas for you</h2>
        </div>
        <ul>
            {posts.map((item) => (
            <li key={item.id}>{item.title}</li>
            ))}
        </ul>
        </div>
    );
}
