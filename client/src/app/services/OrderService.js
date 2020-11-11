import { restService } from "app/services/RestService"

const baseUrl = "/api/orders"

class OrderService {
  async create(order, token) {
    const headers = createAuthHeader(token)
    const { data: createdOrder } = await restService.post(
      baseUrl,
      order,
      headers
    )
    return createdOrder
  }
}

const createAuthHeader = (token) => {
  return {
    Authorization: token,
  }
}

export const orderService = new OrderService()
