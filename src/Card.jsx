import React from "react";
import "./Card.css";
import "./Card-list.css";

function Card(props) {
  return (
    <div className="card-container">
      <span>{props.name}</span>
      <span>{props.number}</span>
      <span>{props.team}</span>
      <span>{props.nationality}</span>
    </div>
  );
}

export default Card;
