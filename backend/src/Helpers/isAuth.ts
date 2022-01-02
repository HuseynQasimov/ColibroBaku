import { verify } from "jsonwebtoken"
import { MiddlewareFn } from "type-graphql"
import { Context } from "./context"

export const isAuth: MiddlewareFn<Context> = ({ context }, next) => {
  const authorization = context.req.headers.cookie
  if (!authorization) {
    return next()
  }

  try {
    const token = authorization.split("=")[1]
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!)
    context.payload = payload as any
  } catch (error) {
    return next()
  }

  return next()
}
