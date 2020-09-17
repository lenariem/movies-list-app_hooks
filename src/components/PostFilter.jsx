import React from 'react'

export default function PostFilter({filter, onFilterSelect}) {
    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'like', label: 'Liked'},
        {name: 'important', label: 'Watched'}

    ]

    const filteredButtons = buttons.map(({name, label}) => {
        const active = filter === name;
        const activeButtonStyle = active ? 'btn-info' : 'btn-outline-secondary'

        return (
            <button 
                key={name} 
                type="button" 
                className={`btn ${activeButtonStyle}`}
                onClick={() => onFilterSelect(name)}
            >{label}</button>
        )
    })
    return (
        <div>
            <div className="btn-group">
                {filteredButtons}
            </div>
        </div>
    )
}

