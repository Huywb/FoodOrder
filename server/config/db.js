import mongoose from "mongoose";

export const connect = async()=>{
    await mongoose.connect(`mongodb+srv://admin:admin123@cluster0.sbxyvvu.mongodb.net/food`).then(()=>console.log("DB Connected"))
}