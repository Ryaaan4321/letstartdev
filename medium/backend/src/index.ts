import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/extension';
import { withAccelerate } from '@prisma/extension-accelerate';

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
  }
}>

app.get('/', (c) => {
  return c.text('Hmlo Hmloo');
})

app.post('/api/signup',(c)=>{
  const dburl=c.env.DATABASE_URL;
  console.log(dburl);
  const prisma=new PrismaClient({
    dataSourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate());
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

