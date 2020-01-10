import React, { useState } from "react";
import "./drivers";

function SearchBox() {
  const [search, setSearch] = useState("");

  return (
    <input
    // onChange={e => {
    //   const filteredTeams = teams_data.filter(team => {
    //     return team.toLowerCase().includes(e.target.value.toLowerCase());
    //   });

    //   setTeams(filteredTeams);
    //   setSearch(e.target.value);
    // }}
    // type="text"
    // value={search}
    />
  );
}

export default SearchBox;
