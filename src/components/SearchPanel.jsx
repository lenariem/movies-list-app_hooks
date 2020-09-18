import React, { useState } from 'react'
import "../css/SearchPanel.css"

export default function SearchPanel ({onUpdateSearch}){
    const [searchTerm, setSearchTerm] = useState('')

    const onUpdateSearchTerm = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
        onUpdateSearch(searchTerm); 
    }
    
    return (
        <div>
            <input 
                className="form-control search-input font-italic"
                type="text"
                placeholder="Search in your posts..."
                onChange={onUpdateSearchTerm}
            />
        </div>
    )
    
} 
