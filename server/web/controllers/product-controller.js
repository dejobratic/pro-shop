import asyncHandler from "express-async-handler"

import { productRepository } from "../../database/services/ProductRepository.js"

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await productRepository.getAll()
  res.status(200).json(products)
})

// @desc    Get product by id
// @route   GET /api/products/:productId
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await productRepository.get(req.params.productId)
  res.status(200).json(product)
})

export { getProducts, getProductById }
