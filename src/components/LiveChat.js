import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { generateRandomName } from "../utils/helper";
import {makeRandomMessage} from "../utils/helper";
import { useState } from "react";


const LiveChat = () => {

    const[liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(() => {

        const i = setInterval(()=> {

            //console.log("API POLLING");
            dispatch(addMessage({
                name : generateRandomName(),
                message : makeRandomMessage(20),
                
            }))
        }, 1500)

        return () => clearInterval(i);
    },[])

    return (
       <>
        <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
            <div>

           
 {chatMessages.map((c, i)=> (<ChatMessage key = {i} name = {c.name} message = {c.message}/> ))} 

        </div>
        </div>

        <form className="w-full p-2 ml-2 border border-blue-700  flex" onSubmit = {(e) => {e.preventDefault(); 
        dispatch(addMessage({
            name : "Haripriya",
            message : liveMessage,
        })
    )
}}
>
        
            <input type = "text" className="w-56 h-6"  
            value={liveMessage} onChange={(e) => {setLiveMessage(e.target.value)}} 
        />
            <button className="mx-2 px-2 bg-green-100">Submit</button>
        </form>
        </>

    )
} 


export default LiveChat;