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
        />
      ))}
    </div>
  );
}

export default CardList;
