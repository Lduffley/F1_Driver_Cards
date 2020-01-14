import React from "react";
import "./searchbox.css";
import "./drivers";

function SearchBox(props) {
  return (
    <input
      className="search-box"
      placeholder="Search Drivers"
      onChange={e => {
        props.onSearch(e.target.value);
      }}
      type="text"
      // value={props.value}
    />
  );
}

export default SearchBox;
