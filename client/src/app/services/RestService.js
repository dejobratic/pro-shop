import axios from "axios"

class RestService {
	async get(url) {
		return await axios.get(url)
	}
}

export const restService = new RestService()
