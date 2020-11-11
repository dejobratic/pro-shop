import Order from "../models/Order.js"

import NotFoundError from "../../core/errors/NotFoundError.js"

class OrderRepository {
  async add(order) {
    const createdOrder = new Order(order)
    return createdOrder.save()
  }

  async get(id) {
    const order = await Order.findById(id).populate("user", "name email")
    if (!order) throw new NotFoundError(`No orders found with id ${id}.`)

    return order
  }
}

export const orderRepository = new OrderRepository()
