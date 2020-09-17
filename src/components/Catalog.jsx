import React, { useState,useEffect } from "react";


export default function Catalog() {
    const [posts, setPosts] = useState([]);

    //after mounting of component is done
    useEffect(
        async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await result.json();
        console.log(data);
        setPosts(data);

    }, []) 
    
    return (
        <div>
        <h2>Movie ideas for you</h2>
        <ul>
            {posts.map(item => <li key={item.id}>
            {item.title}
            </li>)}
        </ul>
        </div>
    )
}
