
import { Task } from "@/app/models/Task"
import { checkAuth,connectDB } from "@/app/utils/features"

export default async function handler(req, res) {
await connectDB();
const user= await checkAuth(req);

if(!user){
    res.status(200).json({message:"Please login first "})
}
const taskId=req.query.id;
const task = await Task.findById(taskId);


if(!task){
     res.status(200).json({ message: "Task not found " })
}
if(req.method ==="DELETE"){
    await Task.deleteOne({_id:taskId});
//   await Task.save();
  res.json({
    message:"Successfully deleted "
  })
}
if(req.method ==="PUT"){
   task.isCompleted=!task.isCompleted;
   await task.save();
}

}
