import { CheckCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { ChannelCard } from "../../Components";
import { fetchApi } from "../../utils/FetchApi";
import RecommendIcon from "@mui/icons-material/Recommend";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchApi(`search?.part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  console.log(videoDetail);

  if (!videoDetail?.snippet) return "loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Box
              sx={{ borderBottom: "1px solid #331B8C", paddingBottom: "10px" }}
            >
              <Typography
                color="#ffff"
                variant="h5"
                fontWeight="bold"
                py={1}
                px={3}
              >
                {title}
              </Typography>
              <Stack direction="row" gap="20px">
                <Typography
                  color="#fff"
                  variant="body1"
                  px={3}
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <RecommendIcon
                  sx={{
                    fontSize: "25px",

                    color: "white",
                  }}
                />
                <Typography
                  color="#fff"
                  variant="body1"
                  // px={1}
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
                py: 2,
                px: 3,
              }}
            >
              <Link to={`/channel/${channelId}`}>
                {/* <ChannelCard /> */}
                <Typography
                  variant={{ sm: "subtitle", md: "h6" }}
                  color="#06B1DD"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "#06B1DD", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack>
                <Typography variant="body1" sx={{ opacity: 0.7 }}></Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        sssssssssssssssss
      </Box>
    </Box>
  );
};

export default VideoDetail;
