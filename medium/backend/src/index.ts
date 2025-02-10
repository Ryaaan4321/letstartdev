import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

const prisma = new PrismaClient().$extends(withAccelerate());

app.get('/', (c) => {
  return c.text('Hmlo Hmloo');
});

app.post('/api/signup', async (c) => {
  try {
    const body = await c.req.json();

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password, 
      },
    });

    return c.json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error creating user:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

app.post('/api/signin', (c) => {
  return c.text('Hmlo hmllloooo from signin');
});

app.post('/api/blog', (c) => {
  return c.text('Created blog');
});

app.put('/api/blog', (c) => {
  return c.text('Updated the blog');
});

app.get('/api/delete/:id', (c) => {
  return c.text('Deleted the blog');
});

export default app;
