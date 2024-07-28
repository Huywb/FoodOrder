import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    name: {type:String,required:true},
    email:{type: String,required:true},
    phone: {type:Number,required:true},
    street: {type:String,required:true},
    city: {type:String,required:true},
    items: {type: Array,required:true},
    amount: {type: Number,required:true},
    quatity: {type: Array,default:{}},
    status: {type: String, default:"Food processing"},
    date: {type: Date,default:Date.now()}
})

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema)
export default orderModel