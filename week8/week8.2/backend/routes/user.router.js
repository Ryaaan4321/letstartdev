import expres from 'express';
import zod from 'zod'
import { User } from '../db/User.js'
import jwt from 'jsonwebtoken'
import { Account } from '../db/Account.js';
import bcrypt from 'bcryptjs';
const router = expres.Router();

const signupSchema = zod.object({
  firstname: zod.string(),
  lastname: zod.string(),
  username: zod.string(),
  password: zod.string()
})

router.post("/signup", async (req, res) => {
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken",
    });
  }

  const { username, firstName, lastName, password } = req.body;

  const salt =10;
  const hashedPassword = await bcrypt.hashSync(password, salt);
  const newUser = await User.create({
    username,
    firstName,
    lastName,
    password: hashedPassword,
  });
  const userId = newUser._id;
  await Account.create({
    userId,
    balance: parseInt(Math.random() * 10000),
  });
  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET
  );
  console.log(process.env.JWT_SECRET);
  res.status(200).json({
    message: "User created successfully",
    token: token,
  });
});
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body ,"req body form signin")
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
      username: users.username,
      firstName: users.firstName,
      lastName: users.lastName,
      _id: user._id
    }))
  })
})
router.put('/update/:id', async (req, res) => {
  const id = req.params.id;
  console.log('Request Body:', req.body);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.status(200).json({
      msg: 'User updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    console.error('Error occurred:', error.message);
    res.status(500).json({
      msg: 'Something went wrong',
      error: error.message,
    });
  }
});


export default router;