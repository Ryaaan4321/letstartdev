import {
  useRecoilState,
  useRecoilValue,
  RecoilRoot,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";
import { useMemo } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("count rerender");
  return (
    <>
      <CountRender />
      <Buttons />
    </>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <EvenCountRenderer />
    </div>
  );
}

function EvenCountRenderer() {
  // one way of rendering the iseven in our app another way is the selectors
  const count = useRecoilValue(countAtom);
  const isEven = useMemo(() => {
    return count % 2 == 0;
  }, [count]);
  return <div>{isEven ? "it is even" : null}</div>;
}

function Buttons() {
  const setcount = useSetRecoilState(countAtom);
  // becuase if i use this will make the render the whole componenet
  // whether in this case we only want to change the setcount to be changed so it doesnt mean to
  // to have the count here so instead of the userecoilstate we can use
  console.log("button re render");
  return (
    <>
      <button onClick={() => setcount((count) => count + 1)}>Increment</button>
      <button onClick={() => setcount((count) => count - 1)}>Decrement</button>
    </>
  );
}

export default App;
