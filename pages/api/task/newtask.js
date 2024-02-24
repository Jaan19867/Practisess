const { connectDB } = require("@/app/utils/features")
const { errorHandler } = require("@/middlewares/error")
import { checkAuth } from "@/app/utils/features"

import { Task } from "@/app/models/Task"

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(200).json({ mesg: "only post " })
  }

  await connectDB()
  const { title, description } = req.body
  if (!title || !description) {
    return res.status(200).json({ mesg: "only post " })
  }

  const user = await checkAuth(req)
  console.log(user + "insde the newtask ")
  if (!user) {
    res.json({ message: "Login First- user nahi mil raha he  " })
  }
  await Task.create({
    title,
    description,
    user: user._id,
  })
  res.json({
    success: true,
    message: "Task Created",
  })
}

export default handler
