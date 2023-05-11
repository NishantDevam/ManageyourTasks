import  {connectDB} from'./db/connect.js';
import express from "express";
import tasks from "./routes/tasks.js";
import dtenv from 'dotenv';
import {notFound} from './middleware/not-found.js';
import {errorHandlerMiddleware} from './middleware/errorHandler.js';
dtenv.config()

const app=express();

//middleware
app.use(express.static('./public'))
app.use(express.json());
// app.use(notFound);
app.use(errorHandlerMiddleware);
const port=process.env.port || 3000;

// app.get('/hello',(req,res)=>{
//     res.send('Task Manager App')
// })

app.use('/api/v1/tasks',tasks)



const start= async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(
            port,
            ()=>{
                console.log(`port running at ${port}...`);
            }
        );
        
    } catch (error) {
        console.log(error);
    }
}

start();