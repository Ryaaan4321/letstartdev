import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <CardWrapper innerComponent={TextComponent} />
    </div>
  );
}

function CardWrapper({ innerComponent: InnerComponent }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <InnerComponent />
    </div>
  );
}

function TextComponent() {
  return <h1>Hi there</h1>;
}



let cnt=4
function plpp() {
  const [todos, settodos] = useState([
    {
      id: 1,
      title: "title1",
      descreption: "descreption1",
    },
    {
      id: 2,
      title: "title1111",
      descreption: "descreption11111",
    },
    {
      id: 3,
      title: "title11113",
      descreption: "descreption1231",
    },
  ]);
  function addtodo() {
    settodos([
      ...todos,
      {
        id: cnt+1,
        title: Math.random()*10,
        descreption: Math.random(),
      },
    ]);
  }

  return (
    <>
      <button onClick={addtodo}>addnewtodo</button>
      {todos.map((todo) => (
        <Todo id={todo.id} title={todo.title} descreption={todo.descreption} />
      ))}
    </>
  );
}

function Todo({ id, title, descreption }) {
  return (
    <div>
      <p>{id}</p>
      <h1>{title}</h1>
      <h6>{descreption}</h6>
    </div>
  );
}

/*
self learnings to learn the react.memo and how it works

*/

function Npp() {
  // initially app now npp people changes with the time so do i
  const [views, setviews] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setviews((views) => views + Math.floor(Math.random() * 10));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      (
      <MoviesViewsRelatime
        title={"suraj chuda hai"}
        views={views}
        releaseDate={"14 February 2024"}
      />
      )
    </>
  );
}

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

// self learniggs

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
