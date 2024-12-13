import expres from 'express';
import zod from 'zod'

const router=expres.Router();

const signupSchema=zod.object({
    firstname:zod.string(),
    secondname:zod.string(),
    username:zod.string(),
    password:zod.string()
})

router.post('/signup',async(req,res)=>{
  const {firstname,secondname,username,password}=req.body;

});

export default router;