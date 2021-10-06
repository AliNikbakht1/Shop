import React from 'react'

export default function Card(props) {
    
    return (
        <div className="card">
            <img src={props.img} alt="card" width="100%" height="120px"/>
            <div>
                <div className="card-title"><h4>{props.title}</h4></div>
                <div className="card-description">{props.description}</div>
            </div>
        </div>
    )
}
