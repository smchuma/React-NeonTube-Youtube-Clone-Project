import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../../Components";
import { fetchApi } from "../../utils/FetchApi";
import { useEffect, useState } from "react";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
    setLoading(false);
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "100vh" },
          borderRight: "1px solid #010326",
          px: { sx: 0, md: 1 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box
        sx={{
          p: 2,
          height: "90vh",
          overflowY: "auto",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#06B1DD" }}> Videos</span>
        </Typography>
        <Videos videos={videos} loading={loading} />
      </Box>
    </Stack>
  );
};

export default Feed;
