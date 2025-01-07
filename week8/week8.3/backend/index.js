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
maina();
