import express from "express"
import { post } from "../Data/Post.js"
import { comments } from "../Data/comments.js"
const allAPI = express.Router()


allAPI.get("/",(req,res)=>{
    try{
        res.status(200).send({status:200,message:"sucsses",data:post})
    }catch(er){
        res.status(400).send({status:400,message:"bad req"})
    }
   
})
allAPI.get("/",(req,res)=>{
    try{
        res.status(200).send({status:200,message:"sucsses",data:comments})
    }catch(er){
        res.status(400).send({status:400,message:"bad req"})
    }
   
})

export default allAPI