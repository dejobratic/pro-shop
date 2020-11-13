import express from "express"

import {
  createOrder,
  getOrderById,
  getMyOrders,
  payOrder,
} from "../controllers/order-controller.js"

import authorize from "../middleware/auth-handler.js"

const router = express.Router()

router.route("/").post(authorize, createOrder)
router.route("/my-orders").get(authorize, getMyOrders)
router.route("/:orderId").get(authorize, getOrderById)
router.route("/:orderId/payment").put(authorize, payOrder)

export default router
