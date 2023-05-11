import Task from "../models/Task.js";
import { asyncWrapper } from "../middleware/async.js";
import { creatCustomError } from "../errors/customError.js";

export const getAllTasks= asyncWrapper(async(req,res)=>{
        const tasks=await Task.find({});
        res.status(200).json({tasks});
})
export const createTasks= asyncWrapper(async (req,res)=>{
    
        const task=await Task.create(req.body);
        res.status(201).json({task});
    
})
export const getTasks=asyncWrapper(async (req,res,next)=>{

        const {id:taskID}=req.params;
        const task=await Task.findOne({_id:taskID});
        if(!task){
            return next(creatCustomError(`No task with id : ${taskID}`));
        }

        res.status(200).json({ task });
    
})
export const updateTasks= asyncWrapper(async (req,res)=>{
        const {id: taskID} =req.params;
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
            overwrite:true
        });
        
        if(!task){
            return next(creatCustomError(`No task with id : ${taskID}`));
        }

        res.status(200).json({ task });
})
export const deleteTasks= asyncWrapper(async(req,res)=>{
        const {id:taskID}=req.params;
        const task=await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return next(creatCustomError(`No task with id : ${taskID}`));
        }
        res.status(200).json({ task });
})
// export default {getAllTasks,createTasks,getTasks,updateTasks,deleteTasks};