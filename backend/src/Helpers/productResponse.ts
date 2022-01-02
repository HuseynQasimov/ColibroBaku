import { Field, ObjectType } from "type-graphql"
import { Product } from "../Models/Entities/ProductEntity"

// ObjectType()
// class Error {
//   @Field(returns => String)
//   message: string
// }

@ObjectType()
export class ProductResponse {
  @Field(returns => String, { nullable: true })
  errorMessage?: string

  @Field(returns => [Product], { nullable: true })
  products?: Product
}
