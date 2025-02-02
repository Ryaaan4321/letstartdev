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