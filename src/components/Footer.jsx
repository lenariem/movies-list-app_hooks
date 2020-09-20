import React from 'react'
import { HashLink as LinkID } from 'react-router-hash-link';

export default function Footer() {
    return (
        <>
            <div className="d-flex justify-content-center" style={{margin: '2%'}}>
                <LinkID to="/#top">
                <button className="btn btn-info">Top</button>
                </LinkID>
            </div>
            <hr />
            <div className = "d-flex justify-content-between" style={{margin: '4% auto 2%'}}>
                
                <div><span>&#169;</span>Elena Riemer 2020</div> 
                <div><a href = "mailto: abc@example.com"><span>myemail@google.com</span></a></div>  
            </div>
        </>
    )
}
