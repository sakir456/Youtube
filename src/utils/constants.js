const GOOGLE_API_KEY = "AIzaSyAXiN6upvhImopYC7SlmNkduCCxrEQe09Q"

export const LIVE_CHAT_COUNT = 10;


export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY; 

 export const YOUTUBE_SEARCH_API =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${GOOGLE_API_KEY}`;

export const CHANNEL_DETAILS_API = 
`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=CHANNEL_ID&key=${GOOGLE_API_KEY}`







