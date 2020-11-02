import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"

import User from "../../database/models/User.js"

const authorize = asyncHandler(async (req, res, next) => {
  let {
    headers: { authorization: bearerToken },
  } = req

  if (!bearerToken || !bearerToken.startsWith("Bearer")) {
    res.status(401)
    throw new Error("Not authorized.", "No valid token found.")
  }

  try {
    const token = bearerToken.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id).select("-password")
    next()
  } catch (error) {
    console.error(error)
    res.status(401)
    throw new Error("Not authorized.", "Token failed.")
  }
})

export default authorize
