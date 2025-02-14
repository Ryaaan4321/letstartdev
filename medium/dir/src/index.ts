import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
});
app.get('/hmlo',(c)=>{
  return c.text('hmlo hmloooo')
})

export default app

//  psql ''
// connetion poool = 

//  DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYWQ1MWNlZGEtODkxNC00MWVjLWJjMDgtZmEyMzc3NjE1NDU5IiwidGVuYW50X2lkIjoiY2Q3ZjI0ODllZWZkZmM2YjdkZTk2MzExNzQ3YWZiNzVmZTE5ODM3ZWNlZTIzN2JhMjY5ZGM0MzE4ZTQ3ODBjNyIsImludGVybmFsX3NlY3JldCI6ImVhNTEwZGU5LTgwYzUtNDA3MS05YTY1LTUxMDhlYzc4ZDYwOSJ9.cOI0BQ2jTAzZWdqwd88n1-Hun1XUbKKDfmxMa_KJRf4"
