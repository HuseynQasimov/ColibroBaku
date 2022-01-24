import { Field, ObjectType } from "type-graphql"
import { Product } from "../Models/Entities/ProductEntity"

@ObjectType()
export class ProductResponse {
  @Field(returns => String, { nullable: true })
  errorMessage?: string

  @Field(returns => [Product], { nullable: true })
  products?: Product[]
}
