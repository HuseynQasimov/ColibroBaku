import { Length } from "class-validator"
import { ArgsType, Field } from "type-graphql"

@ArgsType()
export class signUpData {
  @Field()
  @Length(3, 24)
  firstname: string

  @Field()
  @Length(3, 24)
  lastname: string

  @Field()
  @Length(10, 12)
  phone: string

  @Field()
  @Length(6, 64)
  email: string

  @Field()
  @Length(6, 24)
  password: string
}

@ArgsType()
export class loginData {
  @Field()
  email: string

  @Field()
  password: string
}
