import ArgumentError from "../../core/errors/ArgumentError.js"
import UnauthorizedError from "../../core/errors/UnauthorizedError.js"
import NotFoundError from "../../core/errors/NotFoundError.js"

const errorHandler = (err, req, res, next) => {
  res.status(resolveStatusCode(err)).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  })
}

const resolveStatusCode = (err) => {
  if (err instanceof ArgumentError) return 400
  if (err instanceof UnauthorizedError) return 401
  else if (err instanceof NotFoundError) return 404
  return 500
}

export default errorHandler
