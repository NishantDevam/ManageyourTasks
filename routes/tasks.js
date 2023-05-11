import  express from "express";
import {getAllTasks,createTasks,getTasks,updateTasks,deleteTasks} from "../controller/tasks.js";


const router=express.Router();

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks);


export default router