import { useState } from "react";

export function Createtodos() {
  const [title, settitle] = useState('');
  const [descreption, setdescreption] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={function (e) {
          settitle(e.target.value);
        }}
      ></input>
      <br />
      <input
        type="text"
        placeholder="descreption"
        onChange={function (e) {
          setdescreption(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo/createtodo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              descreption: descreption,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("todo added");
          });
        }}
      >
        Add a todo
      </button><br/>
    </div>
  );
}
