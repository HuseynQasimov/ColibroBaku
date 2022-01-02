import { Field, ObjectType } from "type-graphql"
import { User } from "../Models/Entities/UserEntity"

// ObjectType()
// class Error {
//   @Field(returns => String)
//   message: string
// }

@ObjectType()
export class UserResponse {
  @Field(returns => String, { nullable: true })
  errorMessage?: string

  @Field(returns => User, { nullable: true })
  userData?: User
}
