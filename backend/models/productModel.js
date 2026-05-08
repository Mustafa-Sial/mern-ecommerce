import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{type:String, required:true },
    description:{type:String, required:true },
    price:{type:Number, required:true },
    image:{type:Array, required:true},
    category:{type:String, required:true },
    subCategory:{type:String, required:true },
    sizes:{type:Array, required:true },
    bestseller:{type:Boolean},
    date:{type:Number, required:true}
})

//if our model is already create then it would use that one and if it is not created then it would create a new one
const productModel= mongoose.models.product || mongoose.model("products",productSchema)

export default productModel