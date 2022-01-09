import { sign } from "jsonwebtoken"
import { User } from "../Models/Entities/UserEntity"

export const createAccessToken = (user: User) => {
  return sign({ email: user.email, name: user.firstname }, process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: "30d", algorithm: "HS256" })
}

export const createRefreshToken = (user: User) => {
  return sign({ email: user.email, name: user.firstname }, process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: "7d", algorithm: "HS256" })
}
