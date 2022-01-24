import { Field, ID, Int, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity({ name: "products" })
export class Product extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Field()
  @Column()
  model: string

  @Field()
  @Column()
  productCode: string

  @Field()
  @Column()
  title: string

  @Field()
  @Column()
  description: string

  @Field(type => Int)
  @Column("int")
  price: number

  @Field()
  @Column("text")
  imageUrl: string
}
