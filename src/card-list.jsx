import React from "react";

import Card from "./Card";
import drivers from "./drivers";

function CardList() {
  return (
    <div className="card-list">
      {drivers.map(createCard => (
        <Card
          key={createCard.id}
          name={createCard.name}
          number={createCard.number}
          team={createCard.team}
          age={createCard.yearsOld.age}
          nationality={createCard.nationality}
        />
      ))}
    </div>
  );
}

export default CardList;
