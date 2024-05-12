import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";



const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("")
  const dispatch = useDispatch();

  const chatMessages = useSelector(store => store.chat.messages)

   useEffect(() => {

    const i = setInterval(() => {
      console.log("API polling");
      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(30)
      }))
    }, 1500)

   return () => clearInterval(i)
   }, [])


  return (
    <>
    <div className="  w-full h-[450px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
     <div>
     {
      chatMessages.map((chatMessage,index) => (
      <ChatMessage key={index} name={chatMessage.name}  
      message={chatMessage.message} />
    ))
    }
     </div>
  </div>
  <form className="w-full p-2  border border-black flex" 
  onSubmit={(e) => {
    e.preventDefault();
   dispatch(addMessage({
    name:"sakir shaikh",
    message:  liveMessage 
   }))
   setLiveMessage("")
  }}>
     <input className=" px-2 w-96" type="text"
      value={liveMessage}
       onChange={(e) => {
      setLiveMessage(e.target.value)
     }}/>
     <button className="px-2 mx-2 bg-green-100">Send</button>
     </form>
     </>
  );
};

export default LiveChat
