import React from "react";

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar(props) {
  const { handleSearchInput, handleSearchSubmit } = props;
  // console.log(props);
  return (
    <div className="SearchBar">
      <div className="search_bar">
        <InputBase
          placeholder="Search Movies"
          value={props.query}
          onChange={handleSearchInput}
          // style={{ color: "white" }}
        />
        <div className="search_bar_line"></div>
        <IconButton type="submit" onClick={handleSearchSubmit}>
          <SearchIcon /*style={{ color: "white" }} */ />
        </IconButton>
      </div>
    </div>
  );
}
