const express = require('express');
const app = express();

app.use(express.json());

let numberofrequest=0;
function calculateRequest(req,res,next){
   numberofrequest++;
   console.log(numberofrequest);
   next();
}
function usercheck(req,res,next){
    const user=req.headers['username'];
    const password=req.query.pass;
    console.log(`Username: ${user}, Password: ${password}`);
    if(user!="aryan" || password!="aryan"){
        res.status(403).json({
            msg:"wrong output"
        })
        return;
    }else{
        next();
    }
}
function kidneycheck(req,res,next){
    const kidney= parseInt(req.headers['kidneyid']);
    console.log(`Kidney ID: ${kidney}`);
    if(kidney!=1 && kidney!=2){
        res.status(403).json({
            msg:"wrong output"
        })
        return;
    }else{
        next();
    }
}
function measureTime(req, res, next) {
    console.time('Request Time');  // Start timer for each request
    res.on('finish', () => {       // When the request finishes, stop the timer
        console.timeEnd('Request Time');
    });
    next();
}
console.time("started the request accesing");
app.get('/',measureTime,usercheck,kidneycheck,calculateRequest, function (req, res) {
    res.status(200).json({
        msg:"sab ok hai sir"
    })
});
console.timeEnd("ended the execution of the function")
app.listen(3000, () => {
    console.log("hello we are going live");
});
