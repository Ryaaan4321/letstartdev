import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <>
      <div>
        <RecoilRoot>
          <Count />
        </RecoilRoot>
      </div>
    </>
  );
}

function Count() {
  console.log("count got rendered")
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}
function CountRender() {
  console.log("count render got renderd")
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}
function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <>
      <button
        onClick={() => {
          setCount(count+1)
        }}
      >
        Increase
      </button>
      {count}
      <button
        onClick={() => {
          setCount(count-1)
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
