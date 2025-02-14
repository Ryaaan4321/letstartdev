import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app


// psql 'postgres://avnadmin:AVNS_OTrZxEickAEy5lnFYEa@pg-31b63a0b-tempooooo.k.aivencloud.com:17949/defaultdb?sslmode=require'

// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMjUyZTkwMDMtOWYyNi00OTZmLWJiZDktYjEwZmRkN2M3ZGUwIiwidGVuYW50X2lkIjoiMGRlMDIxNDc1MGJmMTc2NGI3OTZmYjY0ZTliYzY3ODk4ZmRjNzU3YWViYTc5MGUzNzY2ODJiNDQ2NDE4ZTJjMyIsImludGVybmFsX3NlY3JldCI6IjQwMzdlNzUyLTYyMWItNDI2MS1hZDhhLWZiNTEzZGIzOGE3NyJ9.LTpWNEqWjLeIYkrTAbKaouaFlC86TrYLGuWn0eLBR2o"