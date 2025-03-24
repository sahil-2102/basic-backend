import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at Port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed ",err);
})


























/*
// A professional and very good approach for connecting with the database
import express from "express"

const app = express();
;(async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERROR ",error);
        throw err
       })

       app.listen(`App is listening on port ${process.env.PORT}`);
    }
    catch(error){
        console.error("Error ",error);
        throw err
    }
})()
*/