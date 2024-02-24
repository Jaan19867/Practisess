import { checkAuth } from "../../../app/utils/features"

const handler = async (req, res) => {
  if (req.method !== "GET")
    return res.status(200).json({message:"only send get method"})

  const user = await checkAuth(req)

  if (!user) return res.status(200).json({message:"Login First"})

  res.status(200).json({
    success: true,
    user,
  })
}

export default handler
