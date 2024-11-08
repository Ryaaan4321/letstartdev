import { useState, useEffect } from "react";

function App() {
  const [views, setviews] = useState(0);
  useEffect(() => {
    const id=setInterval(()=>{
      setviews((views)=>views+Math.floor(Math.random()*10));
    },1000);
    return ()=>clearInterval(id)
  },[]);
  return <>(
    <MoviesViewsRelatime
    title={"suraj chuda hai"}
    views={views}
    releaseDate={"14 February 2024"}
    />
  )</>;
}

/*
self learnings to learn the react.memo and how it works

*/

function Movie({ title, releaseDate }) {
  console.log("Movie rendered");
  return (
    <div>
      <div>Movie title:{title}</div>
      <div>Relase Data:{releaseDate}</div>
    </div>
  );
}

function MoviesViewsRelatime({ title, releaseDate, views }) {
  return (
    <div>
      <Movie title={title} releaseDate={releaseDate}></Movie>
      Movie Views:{views}
    </div>
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
