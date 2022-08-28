import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../images/logo.png";
import { SearchBar } from "../../Components";

const Navbar = () => {
  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          top: 0,
          background: "#752dd9",
          justifyContent: "space-between",
          position: "sticky",
          boxShadow: "1px 20px 100px #964bff",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="NeonTube" height={50} />
        </Link>
        <SearchBar />
      </Stack>
    </div>
  );
};

export default Navbar;
