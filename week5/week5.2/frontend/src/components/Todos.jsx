export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.descreption}</h2>
            <button>{todo.completed==true?"completed":"not completed"}</button>
        </div>
      })}
    </div>
  );
}
