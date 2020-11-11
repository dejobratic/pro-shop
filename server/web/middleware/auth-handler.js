import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"

import UnauthorizedError from "../../core/errors/UnauthorizedError.js"

import { userRepository } from "../../database/services/user-repository.js"

const authorize = asyncHandler(async (req, res, next) => {
  const {
    headers: { authorization: bearerToken },
  } = req

  throwIfInvalid(bearerToken)
  const { id } = decodeBearerToken(bearerToken)
  req.user = await userRepository.get(id)
  next()
})

const throwIfInvalid = (bearerToken) => {
  if (!bearerToken || !bearerToken.startsWith("Bearer")) {
    throw new UnauthorizedError("No valid token found.")
  }
}

const decodeBearerToken = (bearerToken) => {
  try {
    const token = bearerToken.split(" ")[1]
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    console.error(error)
    throw new UnauthorizedError("Token decoding failed.")
  }
}

export default authorize
