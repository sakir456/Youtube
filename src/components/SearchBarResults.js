
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import SearchVideoCard from './SearchVideoCard';
import ButtonList from './ButtonList';
import { Link } from "react-router-dom"
import {  useNavigate } from "react-router-dom";

const SearchBarResults = () => {
    const [videos, setVideos] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVideos = async () => {
            const url = `${YOUTUBE_SEARCH_API}&q=${query}`;
            const data = await fetch(url);
            const json = await data.json();
            console.log(json)
            setVideos(json.items);
        };

        if (query) {
            fetchVideos();
        }
    }, [query]);

    const handleVideoClick = (video) => {
        navigate(`/watch?v=${video.id.videoId}`, 
          { state: {
            videoTitle: video.snippet.title,
            channelTitle: video.snippet.channelTitle,
           channelId:  video.snippet.channelId || "N/A"
         } 
        });
    };


    return (
        <div className="">
             <div>
             <ButtonList />
             </div>
              <div>
              {videos.map((video) => (
                <div key={video.id.videoId} onClick={() => handleVideoClick(video)} >

                 <SearchVideoCard  info={video} />
                 </div>
            ))}
              </div>
           
        </div>
    );
};

export default SearchBarResults;


