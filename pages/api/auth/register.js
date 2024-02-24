import { User } from "@/app/models/User"

import { connectDB, cookieSetter } from "@/app/utils/features"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const { asyncError, errorHandler } = require("@/middlewares/error")

const handler = async (req, res) => {
  if (req.method !== "POST") {
    // console.log("Some thing error i shere in post method ")
    res.json({ message: "Please send only POST method " })
  }

  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ message: "please enter all input " })
  }

  await connectDB()

  let user = await User.findOne({ email })
  if (user) {
    return res.status(400).json({ message: "User already exist" })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  user = await User.create({
    name,
    email,
    password: hashedPassword,
  })
  await user.save()
  // res.json(savedUser);
  console.log(process.env.JWT_SECRET)
  const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET)

  console.log(token + " inside register me he ")
  cookieSetter(res, token, true)
  res.status(201).json({
    success: true,
    message: "Registered Successfully",
    user,
  })
}

export default handler
