import jwt from 'jsonwebtoken'

const authMiddleware = async(req,res,next)=>{
    const token = req.header("Authorization")
    console.log(token)
    if(!token) res.json({success:false,message: "Not authorized Login Again"})
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SERCRET)
        req.body.token = token_decode
        console.log(123)
        next()
    } catch (error) {
        console.log(234)
        res.json({success:false,message:error.message})
    }
}

export default authMiddleware