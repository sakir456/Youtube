import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const { state } = useLocation();
    const { videoTitle, channelTitle, viewCount  } = state || {};

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

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
                <div className="w-[450px] ml-5">
                    <LiveChat />
                </div>
            </div>
            <div className="ml-5 -mt-8 ">
            <h1 className="font-bold  text-lg text-wrap">{videoTitle}</h1>
            <div className="flex">
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_loQa-vTO6zohJHEdQU7J53LKjyCe5KVZ1L3WzP48mLoC4=s900-c-k-c0x00ffffff-no-rj" 
            alt="channelimage"
              className="w-10 h-10 rounded-full"
            />
            
            <div>
            <p className="text-sm font-bold">{channelTitle}</p>
            <p className="text-sm text-gray-500">{viewCount} views</p>
            </div>
            <button>Join</button>
            </div>
            </div>
           
            <CommentsContainer />
        </div>
    );
};

export default WatchPage;
