import axios from "axios"

const config = {
  headers: {
    "Content-Type": "application/json",
  },
}

class RestService {
  async get(url) {
    return await axios.get(url, config)
  }

  async post(url, body) {
    return await axios.post(url, body, config)
  }
}

export const restService = new RestService()
