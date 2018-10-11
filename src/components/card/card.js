import React from "react";
import "./card.css";

const Card = props => (
    <div
        className="card"
        value={props.id}
        onClick={() => props.handleClick(props.id)}
    >
        <div className="image-container">
        <img alt={props.name} src={props.image}/>
        </div>
    </div>
);

export default Card;