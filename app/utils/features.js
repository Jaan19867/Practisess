
import mongoose from "mongoose";
import { serialize } from "cookie";
import { User } from "../models/User";
import jwt from "jsonwebtoken"

export const connectDB=async ()=>{
    console.log(process.env.MONGO_URL)
await mongoose.connect(
  "mongodb+srv://rizabul:rizabul@cluster0.sx1iyg8.mongodb.net/"
)
console.log("Database conneted ")

}



export const cookieSetter=(res,token,set)=>{
res.setHeader("Set-cookie",serialize("token",set?token:"",{
    httpOnly:true,
    path:"/",
    maxAge: set?1000*60*24*15:0,
}))


}


export const checkAuth=async (req)=>{
  const cookie=req.headers.cookie;
  if(!cookie){ return null;}
  console.log(cookie+ " inside the cookie in checkauth at features.js");
  const cookies=cookie.split(";").map((cookie)=>cookie.trim())
  const tokenCookie = cookies.find((cookie) => cookie.startsWith("token="))
  if (!tokenCookie) {
    return null // Token cookie not found
  }
  const token = tokenCookie.split("=")[1]
   try {
     const decoded = jwt.verify(token, process.env.JWT_SECRET)
     console.log("successful check auth ")
     return await User.findById(decoded.user)
    // Assuming 'user' contains the user ID in the decoded token
   } catch (error) {
     console.error("Error decoding token:", error)
     return null
   }
}