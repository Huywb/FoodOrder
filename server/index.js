import express from 'express'
import cors from 'cors'
import { connect } from './config/db.js'
import FoodRouter from './routes/foodRoute.js'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'



//app config

const app = express()
const port = 4000
dotenv.config()


//db connect

connect()

//endpoint api

//middleware
app.use(express.json())
app.use(cors())

app.use("/api/food",FoodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.json("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})