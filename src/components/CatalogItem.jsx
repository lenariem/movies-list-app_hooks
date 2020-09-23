import React, { useState } from "react";

export default function CatalogItem({poster,title,year,imdbRating,onAdd}) {
    
    const [ isDisabled, setIsDisabled] = useState(false);

    const onMovieAdd = (title) => {
        onAdd(title);
        setIsDisabled(true);
    };
    return (
        <div className="card" style={{ padding: "2%" }}>
            <img
                src={poster}
                alt="movie item"
                className="card"
                style={({ width: "90px" }, { height: "500px" })}
            />
            <div className="card-body">
                <h3 className="card-title text-center">{title}</h3>
                <p className="card-text font-italic">Release year: {year}</p>
                <p className="card-text font-italic">imdbRating: {imdbRating}</p>
                <button
                    className="btn btn-secondary btn-lg btn-block"
                    disabled={isDisabled}
                    onClick={() => {
                        onMovieAdd(title);
                    }}
                > 
                    {isDisabled ? "In your List" : "Add to your movie List"}
                </button>
            </div>
        </div>
    );
}