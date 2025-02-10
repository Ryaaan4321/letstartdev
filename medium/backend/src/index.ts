import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hmlo Hmloo');
})
app.post('/api/signup',(c)=>{
  return c.text("hmlo hmlo");
})
app.post('/api/signin',(c)=>{
  return c.text("hmlo hmllloooo from singin");
})
app.post('/api/blog',(c)=>{
  return c.text("created blog");
})
app.put('/api/blog',(c)=>{
  return c.text("updated the blog");
})
app.get('/api/delte/:id',(c)=>{
  return c.text("deleted the blog");
})

export default app

// psql 'postgres://avnadmin:AVNS_OTrZxEickAEy5lnFYEa@pg-31b63a0b-tempooooo.k.aivencloud.com:17949/defaultdb?sslmode=require'

