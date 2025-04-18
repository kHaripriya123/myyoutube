import { useState , useMemo} from "react";
import { getNthPrimeNumber } from "../utils/helper";

const Demo = () => {

    const [text, setText] = useState(0);

    const[isDarkTheme, setIsDarkTheme] = useState(false);
    //console.log("rendering...");
    
     const num =  useMemo(()=> getNthPrimeNumber(text), [text])
  

    return (
        <div className={" m-4 p-2 w-96 h-96 border border-black" + (isDarkTheme && " bg-black")}>
          <div>
               <button 
               onClick={() => setIsDarkTheme(!isDarkTheme)}  className="bg-violet-300 text-pink-600 mt-2">Toggle</button>
</div>
           
            <div>
                <input type= "number"  className="border border-blue-800 mt-2 ml-2 text-black" 
                   value = {text} onChange={(e) => setText(e.target.value)}
                />
            </div>
                <div>
                   <h1 className="text-pink-500 font-bold">nth prime : {num}</h1>
               
            </div>
        </div>

           
    )
}

export default Demo;