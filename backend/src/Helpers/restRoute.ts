import Express from "express"
import { UploadedFile } from "express-fileupload"

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

router.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ message: "No file uploaded" })
  }

  const file = req.files?.file as UploadedFile

  const uploadDir = "C:/Projects/ColibroBaku/colibrobaku-ui/public/images"

  // eslint-disable-next-line node/no-path-concat
  file.mv(`${uploadDir}/${file.name}`, (err) => {
    if (err) {
      console.log(err)
      return res.status(500).send(err)
    }

    res.json({ fileName: file.name, url: `/images/${file.name}` })
  })
})

export default router
