const express=require('express');
const jwt=require('jsonwebtoken');
const jwtpassword="123456";

const app=express();
app.use(express.json());

const AllUser = [
    {
        name: "aryan",
        email: "a@mail.com",
        password: "aryan"
    },
    {
        name: "himanshu",
        email: "h@mail.com",
        password: "himanshu"
    },
    {
        name: "aman",
        email: "am@mail.com",
        password: "amankhare"  
    }
];

function userExist(username,password){
    let flag=0;
    for(let i=0;i<AllUser.length;i++){
        if(AllUser[i].name==username || AllUser[i].password==password){
            flag=1;
        }
    }
    return flag;
}
app.post('/signin',function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(!userExist(username,password)){
        return res.status(403).json({
            msg:"user doesnt exist"
        });
    }
    var token=jwt.sign({username:username},jwtpassword);
    return res.json({
        token,
    });
});

app.get('/users',function(req,res){
    const token=req.headers.authorization;
    try{
        const decoded=jwt.verify(token,jwtpassword);
        const username=decoded.username;
        return res.json({
            users:AllUser.filter(function(value){
                if(value.name==username){
                    return 0;
                }else{
                    return 1;
                }
            })
        })
    }catch(err){
        return res.status(403).json({
            msg:"Invalid Token"
        })
    }
})
app.listen(3001,()=>{
    console.log("hello we are live");
})