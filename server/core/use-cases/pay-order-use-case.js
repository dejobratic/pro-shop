import { orderRepository } from "../../database/services/order-repository.js"

class PayOrderUseCase {
  async execute(request) {
    const order = await orderRepository.get(request.orderId)

    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: request.payment.id,
      status: request.payment.status,
      updateTime: request.payment.updateTime,
      email: request.email,
    }

    return await orderRepository.update(order)
  }
}

export const payOrderUseCase = new PayOrderUseCase()
