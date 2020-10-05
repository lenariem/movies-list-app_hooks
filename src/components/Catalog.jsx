import React from "react";
import movieDB from "../data/movieDB.json";
import CatalogItem from "./CatalogItem";

export default function Catalog({ onAdd }) {

    const datas = movieDB.map((item) => {
        return (
        <div className="col-sm-6" key={item.title}>
            <CatalogItem
                title={item.title}
                poster={item.poster}
                year={item.year}
                genres={item.genres}
                imdbRating={item.imdbRating}
                onAdd={onAdd}
            />
        </div>
        );
    });

    const headerStyle = {
        fontSize: "2rem",
        textAlign: "center",
        fontWeight: "bolder",
        textTransform: "uppercase",
        color: "black",
        textShadow: "2px 2px orange",
        margin: "10% auto 5%",
    };

    return (
        <div className="catalog">
            <div className="text-center text-capitalize">
                <h2 style={headerStyle}>Movie ideas for you</h2>
            </div>
            <div className="row">{datas}</div>
        </div>
    );
}
