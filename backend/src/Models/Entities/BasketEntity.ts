import { Field, ID, Int, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "./ProductEntity"
import { User } from "./UserEntity"

@ObjectType()
@Entity({ name: "basket" })
export class Basket extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Field(type => Int)
  @Column("int")
  totalPrice: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  additions: string

  @Field(type => [Product])
  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[]

  @OneToOne(() => User, user => user.basket)
  user: User

  @Field({ nullable: true })
  @Column({ nullable: true })
  updateDate: Date

  @Field()
  @Column()
  creationDate: Date
}
