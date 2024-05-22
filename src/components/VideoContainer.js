import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import {  useNavigate } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        console.log(json)
        setVideos(json.items);
    };

    useEffect(() => {
        getVideos();
    }, []);

    const handleVideoClick = (video) => {
        navigate(`/watch?v=${video.id}`, 
          { state: {
            videoTitle: video.snippet.title,
            channelTitle: video.snippet.channelTitle,
           viewCount: video.statistics?.viewCount,
           likeCount: video.statistics?.likeCount,
           channelId:  video.snippet.channelId || "N/A"
         } 
        });
    };

    return (
        <div className="flex flex-wrap">
            {videos.map((video) => (
                <div key={video.id} onClick={() => handleVideoClick(video)} >
                    <VideoCard info={video} />
                </div>
            ))}
        </div>
    );
};

export default VideoContainer;
