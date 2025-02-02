import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c:any,next:any) {
  // thats how we can call the middleware here 
  if(c.req.header("Authorization")){
    await next();
  }else{
    return c.text("you dont have the access");
  }
}

app.post('/',authMiddleware,async (c) => {
  const body=await c.req.json();
  console.log("body  = " , body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text("Hmlo Hmlo");
})
// 
app.get('/todos', async (c) => {
  const url = 'https://dummyjson.com/todos';
  const response = await fetch(url);
  const data: any = await response.json();
  return c.json(data);
});
app.get('/todos/1',async(c)=>{
  const url='https://dummyjson.com/todos/1';
  const response=await fetch(url);
  console.log("response type = ",typeof(response) )
  const data:any=await response.json();
  return c.json(data);
})
app.get('/wer',async(c)=>{
  const url = 'https://api.waqi.info/feed/here/?token=62aa1c1ce8f8989b1e11be7bc380fcf533f4faf4';
  const response = await fetch(url);
  const data:any=await response.json();
  console.log(data);
  return c.json(data);
})
app.get('/weather',async (c:any)=>{
  let endpoint = "https://api.waqi.info/feed/geo:";
  const token = "62aa1c1ce8f8989b1e11be7bc380fcf533f4faf4"; //Use a token from https://aqicn.org/api/
  let html_style = `body{padding:6em; font-family: sans-serif;} h1{color:#f6821f}`;
  let html_content = "<h1>Weather 🌦</h1>";
  // console.log("c= " ,c.req);
  const latitude = c.req.latitude;
  const longitude = c.req.longitude;
  endpoint += `${latitude};${longitude}/?token=${token}`;
  const init = {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  };
  const response = await fetch(endpoint, init);
  console.log("endpoint = ", endpoint);
  console.log("init = " , init);
  const content: any = await response.json();
  // console.log("content = ",content.data);
  html_content += `<p>This is a demo using Workers geolocation data. </p>`;
  html_content += `You are located at: ${latitude},${longitude}.</p>`;
  html_content += `<p>Based off sensor data from <a href="">${content.data.city}</a>:</p>`;
  html_content += `<p>The AQI level is: ${content.data.aqi}.</p>`;
  html_content += `<p>The N02 level is: ${content.data.iaqi?.v}.</p>`;
  html_content += `<p>The O3 level is: ${content.data.o3?.v}.</p>`;
  html_content += `<p>The temperature is: ${content.data.t?.v}°C.</p>`;
  let html = `
    <!DOCTYPE html>
    <head>
      <title>Geolocation: Weather</title>
    </head>
    <body>
      <style>${html_style}</style>
      <div id="container">
      ${html_content}
      </div>
    </body>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
});


export default app

// deployed link = https://snewserver.aryanbhofficial.workers.dev/todos 
