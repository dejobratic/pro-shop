import Product from "../models/Product.js"
import NotFoundError from "../../core/errors/NotFoundError.js"

class ProductRepository {
  async get(id) {
    const product = await Product.findById(id)
    if (!product) throw new NotFoundError(`No product found with id ${id}.`)

    return product
  }

  async getAll() {
    return await Product.find({})
  }
}

export const productRepository = new ProductRepository()
