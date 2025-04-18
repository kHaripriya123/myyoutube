import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState , useEffect } from "react";
import {YOUTUBE_SEARCH_API} from "../utils/Constants";
import  { cacheResults } from "../utils/searchSlice";

const Head = () => {

const[searchQuery , setSearchQuery] = useState("");
const[suggestions , setSuggestions] = useState([]);
const [showSuggestions , setShowSuggestions] = useState("");

const searchCache = useSelector((store) => store.search);

useEffect(() => {
//console.log(searchQuery);

const timer = setTimeout(()=> {

    if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])

    }

    else{
        getSearchSuggestions();
    }
}, 200);
   
   
return () => {
    clearTimeout(timer);
}


 },[searchQuery])


const getSearchSuggestions = async() => {
    //console.log("API CALL -" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);
    
dispatch(cacheResults({
    [searchQuery] : json[1]
}))
   }

    const dispatch = useDispatch();
const  toggleHandler = () => {
    dispatch(toggleMenu());
}

    return(

        <div className="grid grid-flow-col shadow-lg col-span-1">
            <div className="flex">
            <img className="h-6 pr-3 cursor-pointer" src="https://th.bing.com/th/id/OIP.IO7IKI47bDdUQqN9aE-aawHaHa?w=500&h=500&rs=1&pid=ImgDetMain" 
     onClick={() => toggleHandler()}  alt = "menu icon"/>
            <img className= "h-14 mb-2" src = "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg" alt = "youtube icon"/>
        </div>

   <div className="col-span-10 px-10">
   <div>
        <input type = "text" className=" border border-gray-400 w-1/2 rounded-l-full
        " value= {searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}
      onFocus={()=> setShowSuggestions(true)}
      onBlur={()=> setShowSuggestions(false)}/>
        <button className="border border-gray-400 bg-gray-300 px-2 rounded-r-full">🔍</button>
    </div>
   
{showSuggestions && 
    (<div className=" fixed px-3  bg-white w-[37rem] shadow-lg rounded-lg">
      <ul>
    {suggestions.map((suggest) => (<li key = {suggest}  className="py-2 shadow-sm hover:bg-gray-100">🔍{suggest}</li>))}
    </ul>
      </div>
)}
    </div>

      <div className="col-span-1">
          <img alt="user icon"  className="h-7"
           src = "https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"/>
      </div>
      
        </div>
    )
}

export default Head;