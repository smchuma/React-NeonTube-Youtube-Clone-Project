import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../../Components";

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
      <Box
        sx={{
          p: 2,
          height: "90vh",
          overFlowY: "auto",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New
          <span style={{ color: "#D363F2" }}> Videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
};

export default Feed;
