import { restService } from "app/services/RestService"

class PayPalService {
  async getClientId() {
    const { data: clientId } = await restService.get("/api/config/pay-pal")
    return clientId
  }
}

export const payPalService = new PayPalService()
