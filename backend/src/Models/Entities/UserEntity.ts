import { Field, ID, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Basket } from "./BasketEntity"
import { Order } from "./OrderEntity"

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

  @Field()
  @Column()
  isAdmin: Boolean

  @Field(type => [Order])
  @OneToMany(() => Order, order => order.user)
  orders: Order[]

  @OneToOne(() => Basket, basket => basket.user)
  @JoinColumn()
  basket: Basket
}
