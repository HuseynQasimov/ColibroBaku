import "reflect-metadata"
import { ApolloServer } from "apollo-server-express"
import Express from "express"
import { buildSchema } from "type-graphql"
import { createConnection } from "typeorm"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import Redis from "ioredis"
import fileUpload from "express-fileupload"

import { UserResolver } from "./Resolvers/UserResolver"
import router from "./Helpers/restRoute"
import { ProductResolver } from "./Resolvers/ProductResolver"
import { OrderResolver } from "./Resolvers/OrderResolver"
import { BasketResolver } from "./Resolvers/BasketResolver"
config()

const main = async () => {
  const app = Express()
  const redis = new Redis()

  app.use(cookieParser())
  app.use(fileUpload())

  app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000"]
  }))

  app.use(router)

  await createConnection()
  const schema = await buildSchema({
    resolvers: [UserResolver, ProductResolver, OrderResolver, BasketResolver]
  })

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => {
      return ({ req, res, redis })
    }
    // formatError: (err) => {
    //   if (err?.extensions?.code) {
    //     return err.extensions.code
    //   }
    // }
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({ app, cors: false })

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}/graphql`)
  })
}

main()
