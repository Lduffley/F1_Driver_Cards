import React from "react";
import "./Card.css";
import "./Card-list.css";

function Card(props) {
  return (
    <div className="card-container">
      <img alt="driver" src={props.imgURL} />
      <h2>{props.name}</h2>
      <h3> Number: {props.number}</h3>
      <p> Age: {props.age}</p>
      <p>Team: {props.team}</p>
      <p> Nationality: {props.nationality}</p>
    </div>
  );
}

export default Card;
