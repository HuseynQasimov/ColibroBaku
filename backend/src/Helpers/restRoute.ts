import Express from "express"
import { verify } from "jsonwebtoken"
import { User } from "../Models/Entities/UserEntity"
import { createRefreshToken } from "./createToken"

const router = Express()

router.post("/refresh-token", async (req, res) => {
  const token = req.cookies.token

  if (!token) {
    return res.send({ ok: false, accessToken: "" })
  }

  let payload: any = null
  try {
    payload = verify(token, process.env.ACCESS_TOKEN_SECRET!)
  } catch (error) {
    return res.send({ ok: false, accessToken: "" })
  }

  const user = await User.findOne({ email: payload.email })

  if (!user) {
    return res.send({ ok: false, accessToken: "" })
  }

  return res.send({ ok: true, accessToken: createRefreshToken(user) })
})

export default router
