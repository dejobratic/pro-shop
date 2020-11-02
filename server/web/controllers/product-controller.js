import asyncHandler from "express-async-handler"

import Product from "../../database/models/Product.js"

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc    Get product by id
// @route   GET /api/products/:productId
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const productId = req.params.productId
  const product = await Product.findById(productId)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error(`No product found under id ${productId}`)
  }
})

export { getProducts, getProductById }
