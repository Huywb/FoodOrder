import express from 'express'
import multer from 'multer'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'


const router = express.Router()

//image store

const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

router.post("/add",upload.single("image"),addFood)
router.get("/list",listFood)
router.delete("/:id",removeFood)


export default router