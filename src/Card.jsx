import React from "react";
import "./Card.css";
import "./Card-list.css";

function Card(props) {
  return (
    <div>
      <div className="card-container">
        <img alt="driver" src={props.imgURL} />
        <h2>{props.name}</h2>
        <h3> Number: {props.number}</h3>
        <p> Age: {props.age}</p>
        <p>Team: {props.team}</p>
        <p> Country: {props.country}</p>
        <div className="backCard">
          <img alt="helment" src={props.helmet} />
          <h3>Podiums: {props.podiums}</h3>
          <h3>Points: {props.points}</h3>
          <h3>Grand Prix Entered {props.grandPrix}</h3>
          <h3>Highest Grid Position: {props.highestPol}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
