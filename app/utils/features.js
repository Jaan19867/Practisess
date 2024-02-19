
import mongoose from "mongoose";

export const connectDB=async ()=>{
await mongoose.connect(process.env.MONGO_URL,{
    dbName:"Todo-Next",
});
console.log("Database conneted ")

}