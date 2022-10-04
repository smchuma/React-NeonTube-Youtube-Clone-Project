import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../utils/FetchApi";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    fetchApi(`videos?part=snippet.statistics&id={id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, []);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https"//www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
