import User from "../models/User.js"
import NotFoundError from "../../core/errors/NotFoundError.js"
import ArgumentError from "../../core/errors/ArgumentError.js"

class UserRepository {
  async get(id) {
    const user = await User.findById(id)
    if (!user) throw new NotFoundError(`No user found with id ${id}.`)

    return map(user)
  }

  async getByEmailAndPassword(email, password) {
    const user = await User.findOne({ email })
    if (user && (await user.matchesPassword(password))) {
      return map(user)
    }

    throw new ArgumentError(`Wrong email or password.`)
  }

  async getAll() {
    const users = await User.find({})
    return users.map((user) => map(user))
  }

  async add(user) {
    const { email } = user

    const existingUser = await User.findOne({ email })
    if (existingUser)
      throw new ArgumentError(`User with email ${email} already exists.`)

    const newUser = await User.create(user)
    if (newUser) throw new ArgumentError("Unable to create user.")

    return map(newUser)
  }
}

const map = (user) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  isAdmin: user.isAdmin,
})

export const userRepository = new UserRepository()
