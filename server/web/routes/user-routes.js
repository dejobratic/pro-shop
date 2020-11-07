import express from "express"

import {
  authUser,
  registerUser,
  updateUser,
  getUser,
} from "../controllers/user-controller.js"

import authorize from "../middleware/auth-handler.js"

const router = express.Router()

router.route("/").get(authorize, getUser)
router.route("/").put(authorize, updateUser)
router.route("/").post(registerUser)

router.route("/login").post(authUser)

export default router
