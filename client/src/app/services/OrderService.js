import { restService } from "app/services/RestService"

const baseUrl = "/api/orders"

class OrderService {
  async get(id, token) {
    const headers = createAuthHeader(token)
    const { data: order } = await restService.get(`${baseUrl}/${id}`, headers)
    return order
  }

  async getByUserId(userId, token) {
    const headers = createAuthHeader(token)
    const { data: orders } = await restService.get(
      `${baseUrl}/my-orders`,
      headers
    )
    return orders
  }

  async create(order, token) {
    const headers = createAuthHeader(token)
    const { data: createdOrder } = await restService.post(
      baseUrl,
      order,
      headers
    )
    return createdOrder
  }

  async pay(id, payment, token) {
    const headers = createAuthHeader(token)
    const { data: paidOrder } = await restService.put(
      `${baseUrl}/${id}/payment`,
      { payment },
      headers
    )
    return paidOrder
  }
}

const createAuthHeader = (token) => {
  return {
    Authorization: token,
  }
}

export const orderService = new OrderService()
