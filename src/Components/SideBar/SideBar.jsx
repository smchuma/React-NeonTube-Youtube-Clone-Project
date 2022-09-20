import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../utils/utils";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#331B8C",
            color: "#fff",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "#fcfcfc",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
