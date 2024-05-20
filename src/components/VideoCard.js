const VideoCard = ({info}) => {
  
      const {snippet, statistics} = info;
   const {channelTitle, title, thumbnails} = snippet

    return (
        <div className="p-3 m-2 ml-2 w-[303px] shadow-lg">
         <img className="rounded-lg  " alt="thumbnail" src={thumbnails.medium.url}  />  
       <ul>
          <li className="font-bold py-1 text-sm ">{title}</li> 
         <li className="text-sm text-gray-500">{channelTitle}</li>  
         {/* <li className="text-sm text-gray-500">{statistics.viewCount} views</li>  */}
      </ul>
        </div>
    )
}

export default VideoCard