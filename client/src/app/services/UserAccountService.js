import { restService } from "app/services/RestService"

const baseUrl = "api/users"

class UserAccountService {
  async signInWithEmailAndPassword(email, password) {
    const { data: user } = await restService.post(`${baseUrl}/login`, {
      email,
      password,
    })

    return user
  }

  async signUp(user) {
    const { data: signedUpUser } = await restService.post(baseUrl, { ...user })
    return signedUpUser
  }
}

export const userAccountService = new UserAccountService()
