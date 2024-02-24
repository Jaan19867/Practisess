const { Task } = require("@/app/models/Task");
const { connectDB, checkAuth } = require("@/app/utils/features");




const handler=async (req,res)=>{
    if(req.method !=="GET"){
        return res.status(200).json({ message: "Only GET Method is allowed" });
    }
    await connectDB();
    const user=await checkAuth(req);
    console.log(user)
    if(!user){
        return res.status(200).json({message:"Login first "})

    }

    const tasks= await Task.find({user:user._id});
    res.json({
        success:true,
        tasks,
    })
}

export default handler ;