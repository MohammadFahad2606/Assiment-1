import express from "express"
const app = express()
import dotenv from "dotenv"
import allAPI from "./Routes/Resources.js"
dotenv.config()

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

// app.use("/post",allAPI)
app.use("/comments",allAPI)

const port = process.env.PORT  || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})