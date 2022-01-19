import { ArgsType, Field, ID, Int } from "type-graphql"

@ArgsType()
export class basketData {
  @Field(type => Int)
  totalPrice: number

  @Field(type => [ID])
  productId: string[]

  @Field({ nullable: true })
  additions: string

  @Field(type => ID)
  userId: string
}
