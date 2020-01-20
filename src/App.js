import React, { useState } from "react";
import "./styles.css";
import CardList from "./card-list";
import SearchBox from "./searchbox";
import allDrivers from "./drivers";

export default function App() {
  const [drivers, setDrivers] = useState(allDrivers);

  return (
    <div className="App">
      <h1>2019 F1 Drivers</h1>
      <SearchBox
        onSearch={v => {
          if (!v) {
            setDrivers(allDrivers);
            return;
          }
          setDrivers(drivers.filter(d => d.name.toLowerCase().startsWith(v)));
        }}
      />
      <CardList drivers={drivers} />
    </div>
  );
}
