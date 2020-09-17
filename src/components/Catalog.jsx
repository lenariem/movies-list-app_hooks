import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../img/cat2.jpg"; 
import movieDB from "./data/movieDB.json"


export default function Catalog( ) {
    /*  const [posts, setPosts] = useState([]);

    const fetchDatas = async () => {
        const result = await fetch("https://api/v2/movie/action/:optional-id.json");
        const data = await result.json();
        console.log(data);
        setPosts(data);
    };

    
    useEffect(() => {
        fetchDatas();
    }, []); */


    const datas = movieDB.map(item => {
        return (
            <div className="productCard" key={item.title}>
            <h3 className="movie-name">{item.title}</h3>
            <p className="movie-year">{item.year}</p>
            <p className="movie-imb">imdbRating: {item.imdbRating}</p>
            <div className="img-card">
            <img src={item.poster} alt="movie item" className="movie-img"/>
            </div>
            <button className="add-btn" /* onClick={onAdd(item.title)} */>Add to your movie List</button> 
        </div>
        );
    });
            
    return (
    <>
        <div className="left">
            <Link to="/">
            <img src={logo} alt="logo" className="img_Logo" title="back to home page"/>
            </Link>
        </div> 
        <div className="catalogHeader">
            <h2>Movie ideas for you</h2>
        </div>
        <div className="products_wrapper">
            {datas}//
        </div>
    </>
    )
}
