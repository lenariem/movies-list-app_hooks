import React, { useState } from "react";
import "../css/AddForm.css"

export default function AddForm ({onAdd}) {
    
    const [text, setText] = useState('');

    const onValueChange = (e) => {
        setText(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(text)
        setText('')
    };

    return (
        <form 
            className="bottom-panel d-flex"
            onSubmit={onSubmit}
        >
            <input 
                type="text"
                placeholder="What movie are you going to watch?"
                className="form-control new-post-label"
                onChange={onValueChange}
                value={text}
            />
            <button 
                className="btn-outline-secondary" 
                type="submit">
                Add
            </button>
        </form>
    )
}
