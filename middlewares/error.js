


// export const errorHandler=(res,statusCode=500,message="Internal Server ")=>{


//     return res.status(statusCode).json({
//         success:false,
//         message:"Only POST Method is alllowedgh",

//     })
// }


// export const asyncError=(passedFunc)=>(req,res)=>{
//     Promise.resolve(passedFunc(req,res)).catch((err)=>{
//         return  errorHandler(res,500,err.message);
//     })

// }