import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl,
} from "../../utils/utils";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;
  const { videoId } = id;

  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "10px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `demoVideoUrl`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 350, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#6f0da0", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : `demoVideoUrl`}>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : `demoChannelUrl`
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="#c8afff">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
            <CheckCircle
              sx={{
                fontSize: 15,
                color: "grey",
                ml: "5px",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
