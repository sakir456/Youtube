
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import SearchVideoCard from './SearchVideoCard';
import ButtonList from './ButtonList';
import { Link } from "react-router-dom"

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
        <div className="">
             <div>
             <ButtonList />
             </div>
              <div>
              {videos.map((video) => (
                <Link key={video.id.videoId} to={"/watch?v="+ video.id.videoId}><SearchVideoCard  info={video} /></Link>
            ))}
              </div>
           
        </div>
    );
};

export default SearchBarResults;


