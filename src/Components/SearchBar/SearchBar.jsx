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
          border: "1px solid #D97EF2",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
          background: "transparent",
          color: "white",
        }}
      >
        <input
          className="search-bar"
          placeholder="Search...."
          value=""
          onChange={() => {}}
          style={{
            backgroundColor: "transparent",
            color: "white",
          }}
        />
        <IconButton
          sx={{
            p: "10px",
            color: "#D97EF2",
          }}
        >
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
