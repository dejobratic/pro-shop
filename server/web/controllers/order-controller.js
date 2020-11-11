import asyncHandler from "express-async-handler"

import ArgumentError from "../../core/errors/ArgumentError.js"

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

export { createOrder, getOrderById }
