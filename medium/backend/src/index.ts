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
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYjE3NzQwZDMtN2UwNS00ZTYyLTg0NDYtMjA3Nzc1MDhiYzg5IiwidGVuYW50X2lkIjoiMTNkOGZlYzFmNGQ2ZDY5YjNmNWI5MDM0Mzg2YWVmYzNkMWM1MWI3NTI1MDY4YzE4MzA4MWM2MDkxNTBmYWU0MCIsImludGVybmFsX3NlY3JldCI6ImI5OGFhYTE5LTNkNjYtNGQxZC04NmI3LWUwMmJlZTYxYjQwNiJ9.tZ5aO0Kj-tfi5oT2DpZepIBaDNktCmc4ZpUgOskbfZ0"