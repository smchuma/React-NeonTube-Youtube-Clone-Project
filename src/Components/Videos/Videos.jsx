import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "../../Components";

const Videos = ({ videos, loading, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {!videos ? (
        <CircularProgress
          color="secondary"
          size={200}
          thickness={0.8}
          value={100}
          sx={{
            mx: "22rem",
            my: "10rem",
          }}
        />
      ) : (
        videos.map((item, index) => (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))
      )}
    </Stack>
  );
};

export default Videos;
