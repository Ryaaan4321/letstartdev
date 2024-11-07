const {z}=require('zod');

const createtodo=z.object({
    title:z.string(),
    descreption:z.string()
});

const updatetodo=z.object({
    id:z.string(),
});

module.exports={
    createtodo,
    updatetodo
}