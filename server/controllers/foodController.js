import foodModel from "../models/Food.js";
import fs from 'fs'


//add food
const addFood = async (req,res)=>{
    let image_filename =`${req.file.filename}`
    const food =new foodModel({
        name:req.body.name,
        description: req.body.description,
        price: req.body.price,
        category : req.body.category,
        image:image_filename
    })
    console.log(food)
    try {
        await food.save()
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:'Error'})
    }
}

//add list food
const listFood = async(req,res)=>{
    try {
        const foods = await foodModel.find({})
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: "error"})
    }
}

//remove food item
const removeFood = async(req,res)=>{
    try {
        const food = await foodModel.findById(req.params.id)
        console.log(food)
        console.log(req.params.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.params.id)
        res.json({success:true})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

export {addFood,listFood,removeFood}