import jwt from "jsonwebtoken"

class JWTGenerator {
  generate(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" })
  }
}

export const jwtGenerator = new JWTGenerator()
