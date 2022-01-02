import "reflect-metadata"
import { ApolloServer } from "apollo-server-express"
import Express from "express"
import { buildSchema } from "type-graphql"
import { createConnection } from "typeorm"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import Redis from "ioredis"

import { UserResolver } from "./Resolvers/UserResolver"
import router from "./Helpers/restRoute"
import { ProductResolver } from "./Resolvers/ProductResolver"
config()

const main = async () => {
  const app = Express()
  const redis = new Redis()

  app.use(cookieParser())

  app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
  }))

  app.use(router)

  await createConnection()
  const schema = await buildSchema({
    resolvers: [UserResolver, ProductResolver]
  })

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => {
      return ({ req, res, redis })
    }
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({ app, cors: false })

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}/graphql`)
  })
}

main()
