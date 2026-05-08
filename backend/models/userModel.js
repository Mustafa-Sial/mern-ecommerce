import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type: String, required:true},
    email:{type: String, required:true, unique:true},
    password:{type: String, required:true},
    cartData:{type:Object, default:{}}
// we use that minimize false because if we do not use that then it would not save empty object in cartData and it would give us error when we try to access cartData without adding any product in cart because it would be undefined but if we use minimize false then it would save empty object in cartData and it would not give us error when we try to access cartData without adding any product in cart because it would be empty object
}, {minimize:false})

const userModel=mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;