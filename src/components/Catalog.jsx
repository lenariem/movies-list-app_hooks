import React/* , { useState, useEffect} */ from "react";
import movieDB from "../data/movieDB.json"
/* import "../css/Catalog.css" */


export default function Catalog({onAdd}) {
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
    const headerStyle = {
        fontSize: '2rem',
        textAlign: 'center',
        fontWeight: 'bolder',
        textTransform: 'uppercase',
        color: 'black',
        textShadow: '2px 2px orange',
        margin: '10% auto 5%'
    }

    const datas = movieDB.map(item => {
        return (    
        <div className="col-sm-6">
            <div className="card" key={item.title} style={{padding: '2%'}}>
                <img src={item.poster} alt="movie item" className="card" style={{width:'90px'},{height: '500px'}}/>
                <div className="card-body">
                    <h3 className="card-title text-center">{item.title}</h3>
                    <p className="card-text font-italic">Release year: {item.year}</p>
                    <p className="card-text font-italic">imdbRating: {item.imdbRating}</p>
                    <button className="btn btn-secondary btn-lg btn-block" onClick={() => onAdd(item.title)}>Add to your movie List</button> 
                </div>
            </div>
        </div>
        );
    });
            
    return (
    <div className = "catalog" >
        <div className="text-center text-capitalize">
            <h2 style={headerStyle}>Movie ideas for you</h2>
        </div>
        <div className="row">
            {datas}
        </div>
    </div>
    )
}
