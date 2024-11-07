const express = require('express');
const z = require('zod');

const app = express();

app.use(express.json());
const schemacheck1 = z.array(z.number());
const schemacheck2= z.string();

app.post('/', (req, res) => {
    const kidney = req.body.kidney;  
    const password=req.body.password;
    console.log(kidney);
    console.log(password);
    const response1 = schemacheck1.safeParse(kidney); 
    const response2 = schemacheck2.safeParse(password);
    if (!response1.success || !response2.success) {
        res.status(401).json({
            msg: "input is invalid"
        });
        return;
    } else {
        res.status(201).json({
            msg: "success guys",
            response1: response1.data,
            response2:response2.data
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
