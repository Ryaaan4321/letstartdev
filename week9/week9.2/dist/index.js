"use strict";
function greet(name) {
    console.log(`hello ${name}`);
}
greet(86868686868);
function greet1(name) {
    console.log(`hmllo hmlooo ${name}`);
}
// greet1("aryannnnnn");
function sum1(a, b) {
    return a + b;
}
function sum2(a, b) {
    return a + b;
}
// console.log(sum1("sum of the ","aryan is  = ")+sum2(1,2));
function boolcheck(a) {
    if (a > 18)
        return true;
    return false;
}
// console.log(boolcheck(11));
function callback(a) {
    return setTimeout(() => {
        a();
    }, 10000);
}
// this also works as the same
function callback1(a) {
    return setTimeout(() => {
        a();
    }, 2000);
}
;
function printUserr(user) {
    if (user.age > 18) {
        return true;
    }
    return false;
}
console.log(printUserr({ firstname: "aryan", lastname: "ghghg", age: 10 }));
