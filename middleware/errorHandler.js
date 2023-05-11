import { CustomerAPIError } from "../errors/customError.js";
export const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof CustomerAPIError){
        return res.status(err.statusCode).json({msg:err.message});
    }
    return res.status(500).json({msg:"something went wrong,please try again"})
}