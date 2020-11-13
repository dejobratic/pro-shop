import asyncHandler from "express-async-handler"

import ArgumentError from "../../core/errors/ArgumentError.js"

import { payOrderUseCase } from "../../core/use-cases/pay-order-use-case.js"
import { orderRepository } from "../../database/services/order-repository.js"

//  @desc   Create new order
//  @route  POST /api/orders
//  @access Private
const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    throw new ArgumentError("No order items found.")
  } else {
    const order = await orderRepository.add({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    res.status(201).json(order)
  }
})

//  @desc   Get order by id
//  @route  GET /api/orders/:id
//  @access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await orderRepository.get(req.params.orderId)
  res.status(200).json(order)
})

//  @desc   Get user orders
//  @route  GET /api/orders/my-orders
//  @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await orderRepository.getByUserId(req.user._id)
  res.status(200).json(orders)
})

//  @desc   Pay order
//  @route  PUT /api/orders/:id/payment
//  @access Private
const payOrder = asyncHandler(async (req, res) => {
  const paymentRequest = {
    orderId: req.params.orderId,
    payment: req.body.payment,
  }

  const paidOrder = await payOrderUseCase.execute(paymentRequest)
  res.status(200).json(paidOrder)
})

export { createOrder, getOrderById, getMyOrders, payOrder }
