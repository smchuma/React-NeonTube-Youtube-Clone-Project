import { IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../images/logo.png";
import { SearchBar } from "../../Components";
import MenuIcon from "@mui/icons-material/Menu";

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
          <IconButton sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="NeonTube" height={50} />
          <Typography
            variant="h6"
            sx={{ color: "white" }}
            className="logo-text"
          >
            NeonTube
          </Typography>
        </Link>
        <SearchBar />
      </Stack>
    </div>
  );
};

export default Navbar;
