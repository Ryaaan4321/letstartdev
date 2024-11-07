import { useState } from "react";

function App() {
  return (
    <>
      <HeaderWithButton />
      <br />
      <Header title="my name is dooba dooba"></Header>
    </>
  );
}

function HeaderWithButton() {
  const [firsttitle, setfirsttitle] = useState("my name is baba");
  function changeTitle() {
    setfirsttitle("my name is " + Math.random());
  }
  return (
    <>
      <button onClick={changeTitle}>click me to change the title</button>
      <Header title={firsttitle}></Header>
    </>
  );
}
function Header({ title }) {
  // console.log(title);
  return <>{title}</>;
}

function initial() {
  const [name1, setName1] = useState("raman");
  const [name2] = useState("aman");

  function handle() {
    const newname = Math.floor(Math.random() * 100);
    console.log(newname);
    setName1(`random_${newname}`);
  }
  return (
    <div>
      <button onClick={handle}>Generate Name</button>
      <p>My name is {name1}</p>
      <p>My name is {name2}</p>
    </div>
  );
}

export default App;
