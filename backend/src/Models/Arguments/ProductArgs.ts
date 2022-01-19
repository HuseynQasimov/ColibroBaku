import { Length } from "class-validator"
import { ArgsType, Field, Int } from "type-graphql"

@ArgsType()
export class productData {
  @Field()
  @Length(3, 124)
  model: string

  @Field()
  @Length(3, 64)
  productCode: string

  @Field()
  @Length(6, 124)
  title: string

  @Field()
  @Length(6, 1022)
  description: string

  @Field(type => Int)
  price: number

  @Field()
  imageUrl: string
}
