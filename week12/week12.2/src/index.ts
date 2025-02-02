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
const user:Users={
    "a1":{age:10,name:"aaa"},
    "a2":{age:90,name:"hjhjhjhjh"}
};
console.log(user);