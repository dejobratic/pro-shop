import { restService } from "app/services/RestService"

const baseUrl = "api/users"

class UserLoginService {
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

export const userLoginService = new UserLoginService()
