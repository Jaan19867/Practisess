import mongoose from "mongoose";


const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true ,

    },
    description:{
        type:String,
        required:true, 
    },
    isCompleted:{
        type:Boolean ,
        default:false,

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",

    },
    
    createAt:{
        type:Date,
        default:Date.now,
    },
});

mongoose.models={};
export const Task=mongoose.model("Task",TaskSchema);