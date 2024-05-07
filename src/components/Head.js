import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {
    
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
       
    }

    return (
        <div className="grid grid-flow-col p-0 m-1 shadow-lg  ">
            <div className="flex col-span-1 items-center ">
                <img
                    className="h-8 cursor-pointer pl-1  "
                    onClick={() => toggleMenuHandler()}
                    alt="menu"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFU7aWIxBgnNrlC7EB7TiUtLw4obRO-NZamWpHUt4RA&s"
                />
                <a href="/">
                    <img
                        className="h-6 ml-4"
                        alt="You-tube Logo"
                        src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
                    />
                </a>
            </div>

            <div className="col-span-10 ml-40 flex mb-2  relative">
                <div className="border border-gray-400 p-2 rounded-r-full pr-4 py-2.5 pb-[13.2px] pt-3 ml-1 absolute left-20 border-transparent">
                    <CiSearch />
                </div>

                <input
                    placeholder="Search"
                    className="w-1/2 border border-gray-400 p-2 rounded-l-full pl-10 ml-20 focus:border-blue-400 focus:outline-none"
                    type="text"
                />
                <button className="border border-gray-400 p-2 rounded-r-full py-2.5 pb-[13.2px] pt-[10.1px] pr-10 text-lg ml-0 bg-gray-200 relative ">
                    <CiSearch className="absolute top-3 left-3" />
                </button>
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
}

export default Head;
