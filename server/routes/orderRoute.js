import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { addOrder, getAllOrder, userOrder } from '../controllers/orderController.js'

const router = express.Router()


router.post(`/add`,authMiddleware,addOrder)
router.get(`/:id`,authMiddleware,userOrder)
router.get(`/all`,authMiddleware,getAllOrder)

export default router