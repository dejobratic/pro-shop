import express from "express"
import dotenv from "dotenv"
import colors from "colors"

import connectDb from "./database/config/db.js"

import productRouter from "./web/routes/product-routes.js"
import userRouter from "./web/routes/user-routes.js"
import orderRouter from "./web/routes/order-routes.js"
import errorHandler from "./web/middleware/error-handler.js"

dotenv.config()

connectDb()

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is running...")
})

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)
app.use(errorHandler)

app.get("/api/config/pay-pal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const port = process.env.PORT || 5000

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}...`.yellow
      .bold
  )
)
