import { restService } from "app/services/RestService"

const baseUrl = "api/users"

class UserAccountService {
  async getProfile(id, token) {
    const headers = createAuthHeader(token)
    const { data: user } = await restService.get(`${baseUrl}`, headers)
    return user
  }

  async updateProfile(profile, token) {
    const headers = createAuthHeader(token)
    const { data: updatedProfile } = await restService.put(
      baseUrl,
      profile,
      headers
    )
    return updatedProfile
  }
}

const createAuthHeader = (token) => {
  return {
    Authorization: token,
  }
}

export default UserAccountService
export const userAccountService = new UserAccountService()
