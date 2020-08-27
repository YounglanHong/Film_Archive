import React from "react";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar(props) {
  const { handleSearchInput, handleSearchSubmit, enterKeyPress } = props;
  return (
    <div className="SearchBar">
      <Paper component="form" className="search_paper">
        <InputBase
          className="search_input"
          placeholder="Search Movies"
          value={props.query}
          onChange={handleSearchInput}
          onKeyDown={enterKeyPress}
        />
        <Divider
          orientation="vertical"
          style={{ height: "30px", width: "1px" }}
        />
        <IconButton type="submit" onClick={handleSearchSubmit}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
