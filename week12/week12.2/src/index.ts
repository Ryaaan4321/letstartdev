interface User{
    name:string,
    age:number
};
function sumOfAge(user1:User,user2:User){
    return user1.age+user2.age
}
console.log(sumOfAge({name:"sam",age:12},{name:"pam",age:90}))