import express from "express"
import asyncHandler from "express-async-handler"

import Product from "../models/product.js"

const router = express.Router()

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({})
		res.json(products)
	})
)

// @desc    Get single product by id
// @route   GET /api/products/:productId
// @access  Public
router.get(
	"/:productId",
	asyncHandler(async (req, res) => {
		const productId = req.params.productId
		const product = await Product.findById(productId)
		if (product) {
			res.json(product)
		} else {
			res.status(404)
			throw new Error(`No product found under id ${productId}`)
		}
	})
)

export default router
