import { Field, ID, Int, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "./ProductEntity"
import { User } from "./UserEntity"

@ObjectType()
@Entity({ name: "orders" })
export class Order extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Field(type => Int)
  @Column("int")
  price: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  completedDate: Date

  @Field({ nullable: true })
  @Column({ nullable: true })
  deliveredDate: Date

  @Field(type => [Product])
  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[]

  @Field({ nullable: true })
  @Column({ nullable: true })
  additions: string

  @ManyToOne(() => User, user => user.orders)
  user: User

  @Field()
  @Column()
  creationDate: Date
}
