import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../images/logo.png";
import { SearchBar } from "../../Components";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

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
        <MenuIcon sx={{ color: "white" }} />
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <IconButton disableRipple="true" sx={{ color: "white", mr: "35rem" }}>
            <img src={logo} alt="NeonTube" height={50} />
            <Typography
              variant="h6"
              sx={{ color: "white" }}
              className="logo-text"
            >
              NeonTube
            </Typography>
          </IconButton>
        </Link>
        <SearchBar />
      </Stack>
    </div>
  );
};

export default Navbar;
