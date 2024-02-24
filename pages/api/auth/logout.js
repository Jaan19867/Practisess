import { cookieSetter } from "@/app/utils/features"

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(400).json({ message: "Only get method is allowed " })
  }

  cookieSetter(res, null, false)
  res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  })
}
export default handler; 