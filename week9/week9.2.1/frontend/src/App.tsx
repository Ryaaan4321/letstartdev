

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
  isBitch: boolean
}
type Employee = {
  name: string,
  age: number,
  isBitch: boolean
}
type CompanyEmployee = Manager | Employee;
type companyEmployee2 = Manager & Employee;

function GreetEmployee({ Employee }: { Employee: companyEmployee2 }) {
  return (
    <>
      <h1>{Employee.name}</h1>
      <p>{Employee.age}</p>
      {Employee.isBitch ? "kind man" : "kind person"}
    </>
  )
}


interface User {
  firstname: string,
  lastname: string,
  age: number
};

function checkk(props: User[]) {
  return props.filter(x => x.age >= 18);
}
console.log(checkk([
  {
    firstname: "pe pe",
    lastname: "aryan",
    age: 20
  },
  {
    firstname: "aryan",
    lastname: "aryan",
    age: 17
  }
]));

/**
 * Enum representing possible directions.
 * 
 * Enums in TypeScript are used to define a set of named constants. They are useful when you need a way to represent a collection of related values that can be used interchangeably in your code.
 * 
 * Use cases of enums in TypeScript:
 * 
 * 1. **Directional Movement**: Enums can be used to represent directions (e.g., Up, Down, Left, Right) in navigation systems, animations, or game development.
 * 2. **State Management**: Enums can represent different states of an application or component (e.g., Loading, Success, Error).
 * 3. **Configuration Options**: Enums can be used to define a set of configuration options (e.g., LogLevel with values like Debug, Info, Warn, Error).
 * 4. **Role Management**: Enums can represent different user roles in an application (e.g., Admin, User, Guest).
 * 5. **HTTP Methods**: Enums can be used to represent HTTP methods (e.g., GET, POST, PUT, DELETE).
 * 
 * Enums provide a way to define a collection of related values in a type-safe manner, making the code more readable and maintainable.
    * This enum is used to define a set of named constants for directions.
 * It can be used in various parts of the application where directional
 * movement or orientation is required, such as in navigation, animations,
 * or game development.
 */ 

enum Direction {
  Up,
  Down,
  Left,
  Right
}
function DoSomething(dir:Direction){
  if(dir===Direction.Up){
    console.log('going up');
  }else if(dir===Direction.Down){
    console.log('going down');
  }else if(dir===Direction.Left){
    console.log('going left');
  }else{
    console.log('going right');
  }
}

DoSomething(Direction.Up);
function App() {
  return (
    <>
      <RenderTodo title="aryan" descreption="this is test" completed={false} />
      <GreetEmployee Employee={{ name: "Aryan", age: 25, isBitch: true }} />
    
    </>
  );
}



export default App
