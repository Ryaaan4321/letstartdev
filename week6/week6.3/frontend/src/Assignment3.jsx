import { set } from "mongoose";
import { memo, useCallback, useState } from "react";

export default function Assignment3() {
  const [count, setcount] = useState(0);

//   const handleIncrement = useCallback(() => {
//     setcount(count + 1);
//   }, [count]);
//   const handleDecrement = useCallback(() => {
//     setcount(count - 1);
//   }, [count]);

     const handleIncrement=useCallback(()=>{
        setcount(function(currentCount){
            return currentCount+1
        })
     })
     const handleDecrement=useCallback(()=>{
        setcount(function(currentCount){
            return currentCount-1
        })
     })
  return (
    <>
      <p>Count:{count}</p>
      <CountButton
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </>
  );
}

const CountButton = memo(({ onIncrement, onDecrement }) => {
  return (
    <div>
      <div>
        {" "}
        <button onClick={onIncrement}>Increment</button>
      </div>
      <br></br>
      <div>
        {" "}
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </div>
  );
});
