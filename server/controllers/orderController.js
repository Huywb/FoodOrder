import userModel from "../models/User.js";
import orderModel from "../models/Order.js";

//add to order

const addOrder = async(req,res)=>{
    console.log(req.body)
    const {userId,firstname,lastname,email,phone,items,amount,city,street,quatity} =req.body
        const newOrder = new orderModel({
            userId:userId,
            name: firstname + lastname,
            email:email,
            phone :phone,
            items:items,
            amount:amount,
            city:city,
            quatity,
            street:street
        })
    try {
        
        await newOrder.save()
        res.json({success:true,message:"Add to order complete"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
    }
}

const userOrder = async(req,res)=>{
    try {
        const id = req.params.id
        console.log(id)
        const data = await orderModel.find({userId : id})
        res.json({success:true,data:data})        
    } catch (error) {
        console.log(error)
        res.json({success:false,massage:error.message})
    }
}

const getAllOrder = async(req,res)=>{
    try {
        const data = await orderModel.find()
        res.json({success:true,data})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
    }
}

export {addOrder,userOrder,getAllOrder}