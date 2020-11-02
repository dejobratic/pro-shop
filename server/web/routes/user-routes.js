import express from "express"

import {
  authUser,
  registerUser,
  getUser,
} from "../controllers/user-controller.js"

import authorize from "../middleware/auth-handler.js"

const router = express.Router()

router.route("/").get(authorize, getUser)
router.route("/").post(registerUser)
router.route("/login").post(authUser)

export default router
