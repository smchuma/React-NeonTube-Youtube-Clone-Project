import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components";
import { Feed, SearchFeed, VideoDetail, ChannelDetail } from "./Routes";

const App = () => {
  return (
    <Box
      sx={{ background: "linear-gradient(to bottom right, #290656, #44118C)" }}
    >
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/channel/:id" exact element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  );
};

export default App;
