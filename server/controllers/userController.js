import userModel from "../models/User.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//login user

const loginUser = async (req,res)=>{

    const {email,password} = req.body
    try {
        const user = await userModel.findOne({email})
        if(!user) res.json({success:false,message:'This account is not valid'})
        const hasPass = await bcrypt.compare(password,user.password)
        if(hasPass){
        const token = jwt.sign({id : user.email},process.env.JWT_SERCRET,{expiresIn: '30d'} )
        res.json({success:true,data: {...user._doc,token}})
        }else{
         res.json({success:false,message:'Invalid email or password'})
        }
    } catch (error) {
        res.json({success:false,message: error.message})
    }
}

const registerUser = async(req,res)=>{
    const {name,email,password} = req.body
    try {
        //check email valiable
        const exist = await userModel.findOne({email})

        if(exist) res.json({success: false,message: 'Email already exist'})
        if(!validator.isEmail(email)) res.json({success: false,message: 'Please enter a valid email'})
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password,salt)
        const data = new userModel({
                    name,
                    email,
                    password : hashPass
        })
        await data.save()
        const token = jwt.sign({data : data.email},process.env.JWT_SERCRET,{expiresIn: '30d'} )
        if(data) res.json({success:true,data: {...data._doc,token}})
    } catch (error) {
        res.json({success: false,message: error})
    }
}

export {loginUser,registerUser}