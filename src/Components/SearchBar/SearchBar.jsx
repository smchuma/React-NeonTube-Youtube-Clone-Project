import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Paper
        component="form"
        onSubmit={handleSubmit}
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
