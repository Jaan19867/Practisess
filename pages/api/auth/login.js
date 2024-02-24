import { connectDB, cookieSetter } from "@/app/utils/features"
import bcrypt from "bcrypt"
import { User } from "@/app/models/User"
import jwt from "jsonwebtoken"

const handler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" })
    }

    const { email, password } = req.body

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" })
    }

    await connectDB()

    const user = await User.findOne({ email }).select("+password")

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found. Please register." })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET)
    cookieSetter(res, token, true)

    return res.status(200).json({
      success: true,
      message: `Welcome back, ${user.name}`,
      user,
    })
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ message: "Internal Server Error" })
  }


  
}

export default handler
