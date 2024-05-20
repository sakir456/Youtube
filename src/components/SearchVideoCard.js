const SearchVideoCard = ({info}) => {

    const {snippet  } = info;
   const {channelTitle, title, thumbnails} = snippet

    return (
        <div className="flex">
        <div className="w-[303px] m-3 shadow-lg">
         <img className="rounded-lg cursor-pointer  " alt="thumbnail" src={thumbnails.medium.url}  /> 
         </div> 
       <ul className="m-3">
          <li className="font-bold py-1 text-base cursor-pointer ">{title}</li> 
         <li className="text-sm text-gray-500 cursor-pointer">{channelTitle}</li>  
         
      </ul>
        </div>
    )
}

export default SearchVideoCard