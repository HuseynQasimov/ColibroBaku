import { sign } from "jsonwebtoken"
import { User } from "../Models/Entities/UserEntity"

export const createAccessToken = (user: User) => {
  return sign({ id: user.id, name: user.firstname, isAdmin: user.isAdmin }, process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: "30d", algorithm: "HS256" })
}

export const createRefreshToken = (user: User) => {
  return sign({ id: user.id, name: user.firstname, isAdmin: user.isAdmin }, process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: "7d", algorithm: "HS256" })
}
