import { Field, ID, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity({ name: "users" })
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Field()
  @Column()
  firstname: string

  @Field()
  @Column()
  lastname: string

  @Field()
  @Column()
  phone: string

  @Field()
  @Column("text", { unique: true })
  email: string

  @Column()
  password: string

  // @Field()
  // accessToken: string
}
