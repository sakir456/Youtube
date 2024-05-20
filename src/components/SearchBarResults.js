
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VideoCard from './VideoCard';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import SearchVideo from './SearchVideo';

const SearchBarResults = () => {
    const [videos, setVideos] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');

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

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
                <SearchVideo key={video.id.videoId} info={video} /> 
            ))}
        </div>
    );
};

export default SearchBarResults;
