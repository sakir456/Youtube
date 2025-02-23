import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {  useEffect, useRef, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa6";


const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [listening, setListening] = useState(false);
    const [permissionDenied, setPermissionDenied] = useState(false);
    const recognitionRef = useRef(null)
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [theme, setTheme] = useState("light");



    useEffect(() => {
     if(theme=== "dark"){
        document.documentElement.classList.add("dark")
     } else {
        document.documentElement.classList.remove("dark")
     }
    },[theme]);

    
   

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition && !recognitionRef.current) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onstart = () => {
                setListening(true);
                setPermissionDenied(false);
            };

            recognition.onerror = event => {
                if (event.error === 'not-allowed') {
                    setPermissionDenied(true);
                    setListening(false);
                }
            };

            recognition.onresult = event => {
                const transcript = Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');
                setSearchQuery(transcript);
            };

            recognition.onend = () => {
                setListening(false);
            };

            recognitionRef.current = recognition;
        }

        return () => {
            recognitionRef.current?.stop();
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestion();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery,searchCache]);

    const toggleListening = () => {
        if (listening) {
            recognitionRef.current?.stop();
        } else {
            recognitionRef.current?.start();
        }
    };

    const getSearchSuggestion = async () => {
        const url = `${YOUTUBE_SEARCH_API}&q=${searchQuery}`;
        const data = await fetch(url);
        const json = await data.json();
        console.log(json)
       const suggestionList = json.items.map((item) => item.snippet.title);
        setSuggestions(suggestionList);
       dispatch(cacheResults({ [searchQuery]: suggestionList }));
    };

    const handleSearchSuggestion = (suggestion) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
        navigate(`/results?q=${suggestion}`);
    };

    const handleSearchClick = () => {
        navigate(`/results?q=${searchQuery}`);
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col m-1 shadow-lg dark:bg-black ">
            <div className="flex col-span-1  items-center ">
                <img
                    className="h-8 cursor-pointer pl-1"
                    onClick={toggleMenuHandler}
                    alt="menu"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFU7aWIxBgnNrlC7EB7TiUtLw4obRO-NZamWpHUt4RA&s"
                />
                <a href="/">
                    <img
                        className="h-6 ml-4 "
                        alt="You-tube Logo"
                        src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
                    />
                </a>
            </div>
            <div className="col-span-10 ml-40  flex mb-2 relative ">
                <div className="border border-gray-400 p-2 rounded-r-full pr-4 py-2.5 pb-[13.2px] pt-3 ml-1 absolute left-20 border-transparent">
                    <CiSearch />
                </div>
                <input
                    placeholder="Search"
                    className="w-1/2 border border-gray-400 p-2 rounded-l-full pl-10 ml-20 focus:border-blue-400 focus:outline-none"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
                <button
                    className="border border-gray-400 p-2 rounded-r-full py-2.5 pb-[13.2px] pt-[10.1px] pr-10 text-lg ml-0 bg-gray-200 relative"
                    onClick={handleSearchClick}
                >
                    <CiSearch className="absolute top-3 left-3"/>
                </button>

                <button className={`ml-3 flex items-center rounded-full p-3 ${listening ? 'bg-red-500' : 'bg-gray-200'}`} onClick={toggleListening}>
            <FaMicrophone className="text-lg" />
            </button>

            {permissionDenied && (
                    <div className="text-red-500 absolute left-20 top-full mt-2">
                        Permission to the microphone was denied. Please enable it in your browser settings.
                    </div>
                )}

                {showSuggestions && (
                    <div className="absolute mt-11 ml-20  bg-white py-2 w-[32rem]  shadow-lg rounded-lg border border-gray-100 ">
                        <ul>
                            {suggestions.map((suggestion) => (
                                <li
                                    key={suggestion}
                                    className="flex py-1 px-3  shadow-sm hover:bg-gray-100 font-medium text-base"
                                    onClick={() => handleSearchSuggestion(suggestion)}
                                >
                                    <CiSearch className="mr-3 mt-1 text-lg" />
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
          
            <div className="col-span-1 flex items-center">
            <img
                    className="h-8"
                    alt="user"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
                
            </div>
        </div>

       
    );
};

export default Head;
