import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contactRoute.js";

dotenv.config()
console.log("EMAIL:", process.env.EMAIL);
console.log("APP_PASSWORD:", process.env.APP_PASSWORD ? "Loaded" : "Missing");


const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use("/api", contactRoute)

app.get("/",(_,res)=>(
    res.send(`server is live`)
))

app.listen(PORT, ()=>(
    console.log(`server is running at port ${PORT}`)
))
