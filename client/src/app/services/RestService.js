import axios from "axios"

const defaultReqConfig = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}

class RestService {
  async get(url, headers = null) {
    const reqConfig = createReqConfig(headers)
    return await axios.get(url, reqConfig)
  }

  async post(url, body, headers = null) {
    const reqConfig = createReqConfig(headers)
    return await axios.post(url, body, reqConfig)
  }

  async put(url, body, headers = null) {
    const reqConfig = createReqConfig(headers)
    return await axios.put(url, body, reqConfig)
  }
}

const createReqConfig = (headers) => {
  if (headers === null) return defaultReqConfig

  return {
    headers: Object.assign({}, headers, defaultReqConfig.headers),
  }
}

export const restService = new RestService()
export default RestService
