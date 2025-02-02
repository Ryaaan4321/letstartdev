import { Hono } from 'hono'

const app = new Hono()

app.post('/',async (c) => {
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

export default app
