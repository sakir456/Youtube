const VideoCard = ({info}) => {
   console.log(info)
      const {snippet, statistics} = info;
   const {channelTitle, title, thumbnails} = snippet

    return (
        <div className="p-3 m-2 ml-3 w-72 shadow-lg">
         <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}  />  
       <ul>
          <li className="font-bold py-1 text-sm">{title}</li> 
         <li className="text-sm">{channelTitle}</li>  
         <li>{statistics.viewCount} views</li> 
      </ul>
        </div>
    )
}

export default VideoCard