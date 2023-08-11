const mongoose=require("mongoose")

const userschema=mongoose.Schema(
{
    user:{
 type:String,
 require:true,
 uniqe:true,
 trim:true
    },
    email:{
        type:String,
        require:true,
        uniqe:true,
        trim:true
    },
    thoughts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Toughts"
    }],
    friends:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]
}
)
const User=mongoose.model("User",userschema)
module.exports=User
