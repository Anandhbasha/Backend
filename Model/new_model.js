import mongoose from "mongoose";

const new_Schema = new mongoose.Schema({
    user_name:{type:String,required:true},
    user_email:{type:String,required:true, unique:true},
    password:{type:String,required:true}
})

const New_User = mongoose.model("New_user",new_Schema, "shopping");
export default New_User;