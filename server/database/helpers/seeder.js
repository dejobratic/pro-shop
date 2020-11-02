import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"

import connectDb from "./config/db.js"

import users from "./data/users.js"
import products from "./data/products.js"

import User from "./models/user.js"
import Product from "./models/product.js"
import Order from "./models/order.js"

dotenv.config()

connectDb()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const { _id: adminUserId } = createdUsers.find(
      (user) => user.isAdmin === true
    )

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUserId }
    })

    await Product.insertMany(sampleProducts)

    console.log("Data imported...".green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log("Data destroyed...".red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const arg = process.argv[2]

if (arg === undefined) {
  importData()
} else if (arg === "-d") {
  destroyData()
} else {
  console.error(`Unknown command argument ${arg}`.red.inverse)
}
