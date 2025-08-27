//import React, {useState} from "react";
import React, { useState } from "react";

function Counter(){
const [count , setCount] = useState(0);
const increment = ()=> {
setCount(count +1)}
const decrement = ()=>{
setCount(count-1)}
const reset = ()=>{
    setCount(0)
}

return(
    <div className="div">
        
    <p className="count">Count: {count}</p>
    <button className="count-button" onClick={increment} >Increment</button>
    <button className="count-button" onClick={decrement}>decrement</button>
    <button className="count-button" onClick={reset}>Rest Value</button>
        
    </div>
);
}

export default Counter;