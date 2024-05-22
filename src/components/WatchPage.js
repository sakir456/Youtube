import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SubscribeButton from "./SubscribeButton";
import { LiaThumbsUpSolid } from "react-icons/lia";
import { LiaThumbsDown } from "react-icons/lia";
import { PiShareFatLight } from "react-icons/pi";
import { RiDownloadLine } from "react-icons/ri";
import { PiDotsThreeBold } from "react-icons/pi";
import { CHANNEL_DETAILS_API } from "../utils/constants";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const { state } = useLocation();
    const { videoTitle, channelTitle, viewCount, likeCount, channelId  } = state || {};

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
 
        getChannelDetails(channelId)

    }, []);

    const getChannelDetails = async (channelId) => {
        const url = CHANNEL_DETAILS_API.replace("CHANNEL_ID", channelId);  // Replace placeholder with actual channelId
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        const extract = json.items
        const { default: { url: defaultThumbnailUrl } } = extract[0].snippet.thumbnails;
    }

    

    const formatCount = (count) => {
        if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count;
    };
return (
     <div className="flex flex-col w-full">
     <div className="px-5 flex w-full ">
    <div>
    <iframe className="rounded-lg"
        width="900"
        height="450"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
       ></iframe>
                    
                </div>
                <div className="w-[400px] ml-5">
                    <LiveChat />
                </div>
            </div>
            <div className=" w-[900px] ml-5 -mt-8 ">
            <h1 className="font-bold  text-lg text-wrap">{videoTitle}</h1>
            <div className="flex justify-between w-[900px] mt-5">
            <div className="flex w-1/2 ">
            <img src="{defaultThumbnailUrl}" 
            alt="channelimage"
              className="w-10 h-10 rounded-full mt-2"
            />
            
            <div className="m-2 mx-4 ">
            <p className="text-sm font-semibold">{channelTitle}</p>
            <p className="text-xs text-gray-500">2.2M subscribers</p>
            </div>
            <button className="m-3 bg-gray-100 text-lack p-2 px-5 py-1 rounded-2xl hover:bg-gray-200 text-sm font-semibold">Join</button>
            <SubscribeButton />
            </div>
            <div className="flex w-1/2">
                <div className="flex items-center">
                <button className="h-1/2 flex  bg-gray-100 items-center px-2 py-5 rounded-3xl rounded-r-none
                 hover:bg-gray-200  border-r-2 border-r-gray-300 ">
                <LiaThumbsUpSolid className="text-2xl "/>
                <p className="pl-1 pr-1.5 font-semibold">{formatCount(likeCount)}</p>
                </button>
                <button className="h-1/2 flex  bg-gray-100 items-center px-2 py-5 rounded-3xl rounded-l-none
                 hover:bg-gray-200   ">
                <LiaThumbsDown className="text-2xl " />
                </button>
                </div>
                <button className="flex mt-3 mb-3 mx-3  bg-gray-100 items-center px-4  rounded-3xl 
                 hover:bg-gray-200">
                <PiShareFatLight className="text-2xl " />
                <p className="pl-2 font-semibold">Share</p>
                </button>
                <button className="flex mt-3 mb-3   bg-gray-100 items-center px-4  rounded-3xl
                 hover:bg-gray-200 gap-2">
                <RiDownloadLine className="text-2xl "/>
                <p className=" font-semibold">Download</p>
                </button>
                <button className="flex mt-3 mb-3 mx-1  bg-gray-100 items-center px-3  rounded-full 
                 hover:bg-gray-200">
                 <PiDotsThreeBold className=" font-bold" />
                </button>
                </div>
            </div>
            </div>
           
            <CommentsContainer />
        </div>
    );
};

export default WatchPage;
