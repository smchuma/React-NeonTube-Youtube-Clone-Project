import React from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../../Components";
import { fetchApi } from "../../utils/FetchApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { searchTerm } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
    setLoading(false);
  }, [searchTerm]);

  return (
    <Box
      sx={{
        p: 2,
        height: "90vh",
        overflowY: "auto",
        flex: 2,
        ml: "100px",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white", ml: "50px" }}
      >
        <span style={{ color: "#06B1DD" }}>{searchTerm}</span> Videos
      </Typography>

      <Videos videos={videos} loading={loading} />
    </Box>
  );
};

export default SearchFeed;
