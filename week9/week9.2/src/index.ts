function greet(name:any){
    console.log(`hello ${name}`);
}
greet(86868686868);
function greet1(name:string){
    console.log(`hmllo hmlooo ${name}`);
}
// greet1("aryannnnnn");
function sum1(a:any,b:any):any{
    return a+b;
}
function sum2(a:number,b:number):any{
    return a+b;
}
// console.log(sum1("sum of the ","aryan is  = ")+sum2(1,2));
function boolcheck(a:any):boolean{
    if(a>18)return true;
    return false;
}
// console.log(boolcheck(11));
function callback(a:any):any{
    return setTimeout(() => {
        a();
    }, 10000);
}
// this also works as the same
function callback1(a:()=>void):any{
    return setTimeout(() => {
        a();
    }, 2000);
}
// callback(()=>console.log("hello from the callback"));
// callback1(()=>console.log("hmlo hmlo from the second callback"));

interface User{
    firstname:string,
    lastname:string,
    age:number,
    email?:string //to check the optional parameter
};

function printUserr(user:User){
    if(user.age>18){
        return true;
    }
    return false;
    
}
interface User1{
    firstname:string,
    lastname:string,
    age:number,
    email?:string
}
function checkWithProps(props:User1){
    if(props.age>18){
        return true;
    }
    return false;
}
console.log(checkWithProps({firstname:"aryan",lastname:"ghghg",age:10}));
console.log(printUserr({firstname:"aryan",lastname:"ghghg",age:10}));
