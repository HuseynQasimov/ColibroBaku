import { Length } from "class-validator"
import { ArgsType, Field, Int } from "type-graphql"

@ArgsType()
export class productData {
  @Field()
  @Length(3, 24)
  model: string

  @Field()
  @Length(3, 24)
  productCode: string

  @Field()
  @Length(6, 64)
  title: string

  @Field()
  @Length(6, 124)
  description: string

  @Field(type => Int)
  price: number

  @Field()
  images: string
}
