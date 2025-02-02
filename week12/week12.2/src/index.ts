import { APIPromise } from 'openai/core';
import z from 'zod';
// const app=express();
interface User{
    name:string,
    age:number,
    email:string,
    password:string
};
type UpdatedProps=Pick<User,'name'|'age'|'email'>;
type UpdatedOptional=Partial<UpdatedProps>;// i can use it like if i only want to use the name and age only thani can use it
function sumOfAge(updatedProps:UpdatedOptional){
    return (updatedProps.age ?? 0) + (updatedProps.age ?? 0);
}
console.log(sumOfAge({name:"sam",age:12,email:"aa"}));
console.log(sumOfAge({name:"paul",age:12}));

type Foodie={
    readonly name:string,
    readonly age:number,
    email:string,
    password:string
}
const food:Foodie={
    name:"ata",
    age:12,
    email: "ata@example.com",
    password: "securepassword"
}

// food.name="aryan"
food.email="aaagmil.com"


// records and the map to define the structure of the object;

type  U=Record<string,number>;// in this case the string is the key and the number is the value;
type Users=Record<string,{age:number,name:string}>// lets suppose this is the structure of our object;
const us: Users = {
    "a1": { age: 10, name: "aaa" },
    "a2": { age: 90, name: "hjhjhjhjh" }
};

// console.log(user);


interface newUser{
    name:string,
    age:string,
    email:string
}
const mp=new Map<string,newUser>();
mp.set("na",{name:"aa",age:"aa",email:"aa"});
mp.set("nb",{name:"ab",age:"abbb",email:"jkl"});

// for (const [key ,value] of mp){
//     console.log(`${key} value : ${JSON.stringify(value)}`);
// }

// exclude;
 
type EventType='click'|'scroll'|'mousemove';
type ExcludeEvent=Exclude<EventType,'scroll'>;
const handleEvent=(event:ExcludeEvent)=>{
    console.log(`Handling event = ${event}`);
};
// handleEvent('mousemove');

// ONE THING TO REMEBER IS THAT PICK IS USED IN THE OBJECT TO PICK THOSE SPECFIC ELEMENTS AND EXCLUDE IS TO
// EXCLUDE THE SPECIFIC LITERALS CHECK THE CODE FOR THAT


const userProfileSchema=z.object({
    name:z.string().min(1),
    email:z.string().min(1),
    password:z.string().min(1)
})

type finalSchema=z.infer<typeof userProfileSchema>; // thats how i can define the zod schema;


// app.put('/update',(req,res)=>{
//   const updatedBody:finalSchema=req
//   if(updatedBody.email || updatedBody.name || updatedBody.password)

// })