import { useMemo, useState } from "react";

export default function Assignment(){
    const [inputvalue,setinputvalue]=useState(20000);
    let rupee=20
    const expensivevalue=useMemo(()=>{
        let value=1;
        for(let i=0;i<=inputvalue;i++){
            rupee=rupee*100
        }
    },inputvalue)

    return(
        <>
        <input type="number" value={inputvalue} onChange={(e)=>{
            setinputvalue(e.target.value);
        }}></input>
        <p>calculated value {expensivevalue}</p>
        </>
    )
}