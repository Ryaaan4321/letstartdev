const express = require('express');
const app=express();

app.use(express.json());

app.get('/',function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    const c=req.query.c;

    res.status(201).json({
        success:1,
        msg:(parseInt(a)*parseInt(b)*parseInt(c))/100,
        data:{
            p:a,
            r:b,
            t:c
        }

    })
})
app.listen(3000,()=>{
    console.log("server is running");
})