import {z} from 'zod';


export const bloginput=z.object({
    title:z.string(),
    content:z.string(),
    thumbnail:z.string(),
    published:z.boolean()
});

export const signinput=z.object({
    email:z.string().email(),
    username:z.string(),
    name:z.string().optional(),
    password:z.string().min(6)
})

export type SignupInput=z.infer<typeof signinput>
export type BlogInput=z.infer<typeof bloginput>