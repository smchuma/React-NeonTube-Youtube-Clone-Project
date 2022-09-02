import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar } from "../../Components";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #610551",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          variant="body2"
          className="copyright"
          sx={{
            color: "white",
            mt: 1.5,
          }}
        >
          &copy; 2022 NeonTube
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
