import asyncHandler from "express-async-handler"

import { userRepository } from "../../database/services/UserRepository.js"
import { jwtGenerator } from "../services/JWTGenerator.js"

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await userRepository.getByEmailAndPassword(email, password)

  res.status(200).json(withToken(user))
})

// @desc    Register new user
// @route   POST /api/users/login
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const user = await userRepository.add({ name, email, password })

  res.status(201).json(withToken(user))
})

// @desc    Get user
// @route   GET /api/users
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  const {
    user: { _id: userId },
  } = req

  res.status(200).json(await userRepository.get(userId))
})

const withToken = (user) => ({
  ...user,
  token: jwtGenerator.generate({ id: user._id }),
})

export { authUser, registerUser, getUser }
