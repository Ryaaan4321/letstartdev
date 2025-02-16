import {z} from 'zod';

export const bloginput=z.object({
    title:z.string(),
    content:z.string(),
    thumbnail:z.string(),
    published:z.boolean()
});
export const updateBlogInput=z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
});

export const signupinput=z.object({
    email:z.string().email(),
    username:z.string(),
    name:z.string().optional(),
    password:z.string().min(6)
})
export const signininput=z.object({
    email:z.string().email(),
    password:z.string().min(6)
});

export type SignupInput=z.infer<typeof signupinput>
export type SigninInput=z.infer<typeof signininput>
export type BlogInput=z.infer<typeof bloginput>
export type updateBlogInput=z.infer<typeof updateBlogInput>