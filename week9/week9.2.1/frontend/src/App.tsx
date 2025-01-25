

interface Todos {
  title: string,
  descreption: string,
  completed: boolean;
}
function RenderTodo(props: Todos) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.descreption}</p>
      <p>{props.completed ? "we did it" : "fucked it up"}</p>
    </div>
  )
}


type GreetArg = number | string;

function Greet(name: GreetArg) {
  console.log('hmlo hmlo ' + name);
}


//WHEN TO USE THE TYPES AND WHEN TO USE THE INTERFACES;

// 1. Use interfaces when you want to describe the structure of an object or a class.
// 2. Use types when you want to describe the type of a primitive, union, or intersection.
// 3. Use types when you need special features like union types, intersection types, or tuples.
// 4. Use types when you need to use mapped types or conditional types.
// 5. Use interfaces when you want to use declaration merging.
type Manager = {
  name: string,
  age: number
  isBitch:boolean
}
type Employee = {
  name: string,
  age:number,
  isBitch: boolean
}
type CompanyEmployee = Manager | Employee;
type companyEmployee2 = Manager & Employee;

function GreetEmployee({Employee}:{Employee:companyEmployee2}) {
  return (
    <>
      <h1>{Employee.name}</h1>
      <p>{Employee.age}</p>
      {Employee.isBitch ? "kind man" : "kind person"}
    </>
  )
}
function App() {
  return (
    <>
      <RenderTodo title="aryan" descreption="this is test" completed={false} />
      <GreetEmployee Employee={{ name: "Aryan", age: 25, isBitch: true }} />
    </>
  );
}



export default App
