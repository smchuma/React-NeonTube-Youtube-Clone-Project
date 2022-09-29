import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { Videos, ChannelCard } from "../";
import { fetchApi } from "../../utils/FetchApi";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);

  useEffect(() => {
    fetchApi(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
  }, [id]);

  console.log(channelDetail);
  return <div>ChannelDetail</div>;
};

export default ChannelDetail;
