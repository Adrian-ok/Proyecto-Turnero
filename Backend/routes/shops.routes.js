import { Router } from 'express'
import { createShops, getAllShops, getShop, updateShops, deleteShop } from '../controllers/shops.controller.js'

const router = Router()

router.post('/shops', createShops)

router.get('/shops', getAllShops)

router.get('/shops/:id', getShop)

router.put('/shops/:id', updateShops)

router.delete('/shops/:id', deleteShop)

export default router