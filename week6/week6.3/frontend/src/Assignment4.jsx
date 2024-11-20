import { useEffect, useReducer, useRef } from "react";

export default function Assignment4(){
    const inputRef=useRef();
    useEffect(()=>{
        inputRef.current.focus();
    },[inputRef])

    const handleClickButton=()=>{
        inputRef.current.focus();
    }
    return (
        <>
        <input ref={inputRef} type="text" placeholder="Enter your text here"></input>
        <button onClick={handleClickButton}>Focus Input</button>
        </>
    )
}