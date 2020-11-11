import express from "express"

import { createOrder, getOrderById } from "../controllers/order-controller.js"

import authorize from "../middleware/auth-handler.js"

const router = express.Router()

router.route("/").post(authorize, createOrder)
router.route("/:orderId").get(authorize, getOrderById)

export default router
