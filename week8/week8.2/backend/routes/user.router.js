import expres from 'express';
import zod from 'zod'
import { User } from '../db/User.js'
import jwt from 'jsonwebtoken'
import { Account } from '../db/Account.js';

const router = expres.Router();

const signupSchema = zod.object({
  firstname: zod.string(),
  lastname: zod.string(),
  username: zod.string(),
  password: zod.string()
})

router.post('/signup', async (req, res) => {
  const { firstname, lastname, username, password } = req.body;
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
  const userid=user._id;

  await Account.create({
    userId:userid,
    balance:1*Math.random()*1000,
  })
  const newuser = await User.create(req.body);
  console.log(newuser);
  const token = jwt.sign({
    userId: User._id
  }, process.env.JWT_SECRET);
  console.log(token);
  res.json({
    msg: "user created succesfully",
    token: token
  })
});
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  const validUser = await User.findOne({ username: username });
  const validPassword = await User.findOne({ password: password });
  if (!validPassword || !validUser) {
    return res.status(404).json({
      msg: "invalid credentials"
    })
  }
  res.status(201).json(validUser);

})
router.get("/allusers", async (req, res) => {
  const users = await User.find({});
  res.json({ users });
})
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: { "$regex": filter }
      },
      {
        lastName: { "$regex": filter }
      }
    ]
  })

  res.json({
    user: users.map(user => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id
    }))
  })
})

export default router;