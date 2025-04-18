import { useState } from "react";
const Demo2 = () => {


    let x = 10;
    const[y, setY] = useState(0);
    return (
        <div className=" mt-4 w-96 h-96 border  border-black">

<div>
    <button className="bg-cyan-100 mt-2 ml-2 text-black" onClick={() => {x = x +1; console.log(x);} }
    
         > Increase x
       
    </button>
    let x = {x}
    
</div>

<span>
    <button className="bg-cyan-100 mt-2 ml-2 text-black" onClick={()=> setY(y+1) }>Increase Y</button>
    state= {y}
</span>
        </div>
    )
}

export default Demo2;