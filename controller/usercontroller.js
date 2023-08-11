const { json } = require("express/lib/response")
const User=require("../models/user")

const Usercontroller={
    async getalluser(req,res){
        try{
            
            const allusers=await User.find()
            res.json(allusers)
        } catch(error){
            console.log(error)
        }
    },
    async getuser(req,res){
        try {
            const user=await User.findOne({_id:req.params.userID})
            res.json(user)
        } catch (error) {
            console.log(error)
        }
    },
    async createuser(req,res){
        try{
            const newuser=await User.create(req.body)
            res.json(newuser)
        } catch(error){
            console.log(error)
        }
    },
    async updateuser(req,res){
        try {
            const updateduser=await User.findOneAndUpdate(
                {_id:req.params.userID},
                {$set:req.body},
                {new:true}
            )
            res.json(updateduser)
        }catch(error){
            console.log(error)
        }
    },
    async Deleteuser(req,res){
        try{
            const deleteduser=await User.findOneAndDelete(
                {_id:req.params.userID},
            )
            res.json(deleteduser)
        }catch(error){
            console.log(error)
        }
    }
}
module.exports=Usercontroller
