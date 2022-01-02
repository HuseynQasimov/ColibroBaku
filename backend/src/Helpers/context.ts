import { Request, Response } from "express"
import { Redis } from "ioredis"

export interface Context {
  req: Request,
  res: Response,
  payload?: {email: string},
  redis: Redis
}
