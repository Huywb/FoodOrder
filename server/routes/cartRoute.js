import express from 'express'
import { addCart, getCart, removeCart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()


router.get(`/`,authMiddleware,getCart)
router.post(`/add`,authMiddleware,addCart)
router.post(`/remove`,authMiddleware,removeCart)

export default router