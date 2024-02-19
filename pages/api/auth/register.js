import { connectDB } from "@/app/utils/features"
import { Task } from "@/app/models/Task"

const handler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(400).json({
      message: "error he ye ",
    })

  try {
    await connectDB()
  res.status(200).json({ message: "Database connected successfully " })
  } catch (error) {
    console.error("Error connecting to database:", error)
    res.status(500).json({ mesg: "error is showing " })
  }

  const { title, description } = req.body

  await Task.create({
    title: title,
    description: description,
    user: "Asdasd",
  })
  res.json("Task has been created ")

}

export default handler
