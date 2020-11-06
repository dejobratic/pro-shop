import { restService } from "app/services/RestService"

const baseUrl = "api/users"

class UserAccountService {
  async logInWithEmailAndPassword(email, password) {
    const { data: user } = await restService.post(`${baseUrl}/login`, {
      email,
      password,
    })

    return user
  }
}

export const userAccountService = new UserAccountService()
