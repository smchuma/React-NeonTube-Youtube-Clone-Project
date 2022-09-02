import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "1px solid black",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
          backgroundColor: "#400B75",
          color: "white",
        }}
      >
        <input
          className="search-bar"
          placeholder="Search...."
          value=""
          onChange={() => {}}
          style={{
            backgroundColor: "#400B75",
            color: "white",
          }}
        />
        <IconButton
          sx={{
            p: "10px",
            color: "red",
          }}
        >
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
