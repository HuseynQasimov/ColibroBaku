import { ArgsType, Field, ID, Int } from "type-graphql"

@ArgsType()
export class orderData {
  @Field(type => Int)
  price: number

  @Field(type => [ID])
  productId: string[]

  @Field({ nullable: true })
  additions: string

  @Field(type => ID)
  userId: string

  @Field({ defaultValue: false, nullable: true })
  isCompleted: Boolean

  @Field({ defaultValue: false, nullable: true })
  delivered: Boolean
}
