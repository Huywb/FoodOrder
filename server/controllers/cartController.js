import userModel from '../models/User.js'


//add items
const addCart = async(req,res)=>{
    try {
        const {userId} = req.body
        let userData = await userModel.findOne({_id: userId})
        console.log(userId)
        let cartData = await userData.cartData
        console.log(cartData)
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }else{
            cartData[req.body.itemId] += 1
        }
        console.log('after',cartData)

        await userModel.findByIdAndUpdate(userId,{cartData: cartData})
        res.json({success:true,message:"Added Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
    }
}

//remove items
const removeCart = async(req,res)=>{
    try {
        const {userId} = req.body
        let userData = await userModel.findOne({_id: userId})
        console.log(userId)
        let cartData = await userData.cartData
        console.log(cartData)
        if(cartData[req.body.itemId]){
            cartData[req.body.itemId] -= 1
        }
        console.log('after',cartData)

        await userModel.findByIdAndUpdate(userId,{cartData: cartData})
        res.json({success:true,message:"Added Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
    }
}

//fetch cart data 
const getCart = async(req,res)=>{
    try {
        const {userId} = req.body
        let userData = await userModel.findOne({_id: userId})
        const cartUser = userData.cartData
        res.json({success:true,data: cartUser})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
    }
}

export {addCart,removeCart,getCart}