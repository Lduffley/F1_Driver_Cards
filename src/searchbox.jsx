import React from "react";
import "./drivers";

function SearchBox(props) {
  return (
    <input
      onChange={e => {
        props.onSearch(e.target.value);
      }}
      type="text"
      // value={props.value}
    />
  );
}

export default SearchBox;
