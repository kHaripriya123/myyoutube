import Button from "./Button";

const ButtonList = () => {
const List = [{id : 1 ,  btnName  : "ALL"} , {id : 2 , btnName : "Songs" },  {id : 3, btnName : "Gaming"},
     {id : 4 ,   btnName :  "Soccer"} , { id : 5 , btnName : "Cricket"} , {id : 6 ,   btnName : "Cooking"},  {id : 7 ,  btnName : "Live"}];

     return (
        
        <div className="flex">

{List.map((buttons) => 
(<Button  key = {buttons.id} name  = {buttons.btnName}/>))}
            
        </div>
     )
}

export default ButtonList;



