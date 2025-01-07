import axios from "axios";
import { response } from "express";
function main() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(async (response) => {
        const json = await response.json();
        console.log(json, "from the main");
    })
}
// main()
async function maina() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data =await response.json();
    console.log(data);
}
// maina();

function main1(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log(response.data);
    })
}
// main1();


function main2(){
    axios.post('https://httpdump.app/dumps/e96da8fa-e0ca-4b9b-a7f9-8d1229a2a8eb',
    {
        username:"aryan",
        email:"aa@gmail.com",
    },{
        headers:"Bearer 123"
    }).then((response)=>{
        console.log(response);
    })
}
main2();
