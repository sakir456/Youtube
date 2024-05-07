import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const [clickedListedItem, setClickedListedItem] = useState(null)

    const  checkClickedListedItem = (itemName) => {
        setClickedListedItem(itemName)
    }
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
      
    //early Return 
    if(!isMenuOpen) return null;
    return (
        <div className="p-5 shadow-lg w-52 py-5">

        <ul>

        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer 
         ${clickedListedItem === "Home" ? "font-semibold" : ""}`} 
         onClick={() => checkClickedListedItem("Home")}>
      <Link to="/">Home</Link> 
         </li>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer 
        ${clickedListedItem === "Shorts" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Shorts")}>Shorts</li>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer 
        ${clickedListedItem === "Videos" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Videos")}>Videos</li>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer 
        ${clickedListedItem === "Live" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Live")}>Live</li>

    </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
    <ul>
        <li  className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer 
        ${clickedListedItem === "Music" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Music")}>Music</li>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer
         ${clickedListedItem === "Sports" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Sports")}>Sports</li>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer 
        ${clickedListedItem === "Gaming" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Gaming")}>Gaming</li>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer 
        ${clickedListedItem === "Movies" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Movies")} >Movies</li>
    </ul>


    <h1 className="font-bold pt-5">Watch Later</h1>
    <ul>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer
         ${clickedListedItem === "Music" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Music")}>Music</li>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer
         ${clickedListedItem === "Sports" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Sports")}>Sports</li>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer
         ${clickedListedItem === "Cricket" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Cricket")}>Cricket</li>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer 
        ${clickedListedItem === "FootBall" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("FootBall")}>FootBall</li>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer
         ${clickedListedItem === "Gaming" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Gaming")}>Gaming</li>
        <li className={`p-1 hover:bg-gray-200 
        hover:rounded-md cursor-pointer
         ${clickedListedItem === "Movies" ? "font-semibold" : ""}`} onClick={() => checkClickedListedItem("Movies")}>Movies</li>
    </ul>
        </div>
    )
}
export default Sidebar;