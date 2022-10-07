import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoVideoTitle, demoChannelTitle } from "../../utils/utils";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;
  const { videoId } = id;

  return (
    <Card
      sx={{
        width: { xs: "350px", sm: "350px", md: "350px" },
        boxShadow: "none",
        borderRadius: "10px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `demoVideoUrl`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {
              xs: "350px",
              sm: "350px",
              md: "350px",
            },
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#030140", height: "106px" }}>
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
          <Typography variant="subtitle2" fontWeight="bold" color="#06B1DD">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
            <CheckCircle
              sx={{
                fontSize: 15,
                color: "gray",
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
