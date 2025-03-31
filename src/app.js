import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended: true,
    limit:"16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())

// Importing and using the routes using Router Class from express
import userRouter from "./routes/user.routes.js" // Don't use braces when express default is used

app.use("/api/v1/users",userRouter); //Now all the request coming at /users will pass the control
                                     //  to userRouter that contains all routes

export { app }