import React from "react";

import Card from "./Card";

function CardList(props) {
  return (
    <div className="card-list">
      {props.drivers.map(createCard => (
        <Card
          key={createCard.id}
          name={createCard.name}
          imgURL={createCard.imgURL}
          number={createCard.number}
          team={createCard.team}
          age={createCard.yearsOld.age}
          country={createCard.country}
        />
      ))}
    </div>
  );
}

export default CardList;
