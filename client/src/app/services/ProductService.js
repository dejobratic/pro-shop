import { restService } from "app/services/RestService"

const baseUrl = "/api/products"

class ProductService {
	async getAll() {
		const { data: products } = await restService.get(baseUrl)
		return products
	}

	async getById(id) {
		const { data: product } = await restService.get(`${baseUrl}/${id}`)
		return product
	}
}

export const productService = new ProductService()
