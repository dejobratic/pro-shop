import express from "express"
import dotenv from "dotenv"
import colors from "colors"

import connectDb from "./config/db.js"

import productController from "./controllers/product-controller.js"
import errorHandler from "./middleware/error-handler.js"

dotenv.config()

connectDb()

const app = express()

app.get("/", (req, res) => {
	res.send("API is running...")
})

app.use("/api/products", productController)

app.use(errorHandler.notFound)
app.use(errorHandler.server)

const port = process.env.PORT || 5000

app.listen(
	port,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${port}...`.yellow
			.bold
	)
)
