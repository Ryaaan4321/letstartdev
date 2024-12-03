import { RecoilRoot, useRecoilValue } from "recoil";
import { todoAtomFamily } from "./atom";

function App() {
  return <RecoilRoot>
    <Todo id={1}></Todo>
    <Todo id={2}></Todo>
  </RecoilRoot>;
}

function Todo({id}){
 const currentTodo=useRecoilValue(todoAtomFamily(id));
 return (
  <>
  <ul>
    <li>{currentTodo.title}</li>
    <li>{currentTodo.descreption}</li>
  </ul>
  <br/>
  </>
 )
}

export default App;
