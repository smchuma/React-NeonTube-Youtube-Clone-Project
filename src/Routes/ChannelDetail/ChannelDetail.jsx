import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { fetchApi } from "../../utils/FetchApi";
import { ChannelCard, Videos } from "../../Components";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: `linear-gradient(3deg, #02002e 0%, rgba(117,45,217,1) 80%)`,
            height: "200px",
            zIndex: 10,
            boxShadow: "1px 0.1px 20px #02002e",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>
      <Box
        p="2"
        sx={{
          display: "flex",
          alignItems: "center",
          justify: "center",
        }}
      >
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={videos} paddingLeft="10px" />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
