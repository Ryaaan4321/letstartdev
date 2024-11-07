function transform(i,push){
    const n=i*2;
    push(n);
}
function push(n){
  const arr=[];
  arr.push(n);
  return arr;
}
const map=new Map();
const arr=[1,2,3,4,5];
const ans=arr.map(transform);
console.log(ans);