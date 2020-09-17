import React from 'react'
import '../css/Header.css'


export default function Header({liked, watched, allPosts}) {
    return (
        <div className = 'header'>
            <h1>List of Lena's movies</h1>
            <h2>{allPosts} posts, watched {watched}, liked {liked}</h2>
        </div>
    )
}
