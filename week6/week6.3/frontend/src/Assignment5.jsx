import { useRef, useState } from "react";

export default function Assignment5() {
  const [count, setcount] = useState(0);
  const numberofTimeRendered = useRef(0);
  numberofTimeRendered.current = numberofTimeRendered.current + 1;

  const handleRender = () => {
    setcount(count + 1);
  };

  return (
    <>
      <p>This component is rendered {numberofTimeRendered.current} times</p>
      <button onClick={handleRender}>Force Render</button>
    </>
  );
}
