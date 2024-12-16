import expres from 'express';
import zod from 'zod'
import { User } from '../db/User.js'
import jwt from 'jsonwebtoken'

const router = expres.Router();

const signupSchema = zod.object({
  firstname: zod.string(),
  secondname: zod.string(),
  username: zod.string(),
  password: zod.string()
})

router.post('/signup', async (req, res) => {
  const { firstname, secondname, username, password } = req.body;
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    res.status(501).json({
      msg: "the input data is invalid"
    })
  }
  const user = User.findOne({ username });
  if (user._id) {
    return res.json({
      msg: "email already taken/Inputs are inavlid"
    })
  }
  const newuser = await User.create(req.body);
  console.log(newuser);
  const token = jwt.sign({
    userId: User._id
  }, process.env.JWT_SECRET);
  console.log(token);
  res.json({
    msg: "user created succesfully",
    token:token
  })
});

export default router;