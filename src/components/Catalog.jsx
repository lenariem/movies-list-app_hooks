import React from "react";
import movieDB from "../data/movieDB.json";
import CatalogItem from "./CatalogItem";

export default function Catalog({ onAdd }) {
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
        fontSize: "2rem",
        textAlign: "center",
        fontWeight: "bolder",
        textTransform: "uppercase",
        color: "black",
        textShadow: "2px 2px orange",
        margin: "10% auto 5%",
    };

    const datas = movieDB.map((item) => {
        return (
        <div className="col-sm-6" key={item.title}>
            <CatalogItem
            title={item.title}
            poster={item.poster}
            year={item.year}
            imdbRating={item.imdbRating}
            onAdd={onAdd}
            />
        </div>
        );
    });

    return (
        <div className="catalog">
        <div className="text-center text-capitalize">
            <h2 style={headerStyle}>Movie ideas for you</h2>
        </div>
        <div className="row">{datas}</div>
        </div>
    );
}
