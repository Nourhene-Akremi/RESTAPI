const mongoose=require('mongoose')

const cotact=new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        age:Number,
        
    }
)
module.exports=mongoose.model('modelcontact',cotact)

