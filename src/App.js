import React from "react";
import "./styles.css";
import CardList from "./card-list";
import SearchBox from "./searchbox";

export default function App() {
  return (
    <div className="App">
      <SearchBox />
      <CardList />
    </div>
  );
}
