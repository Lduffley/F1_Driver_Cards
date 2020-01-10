import React from "react";

export const SearchBox = props => (
  <input
    className="search-box"
    type="search"
    placeholder="search drivers"
    onChange={props.onSearchChange}
  />
);
