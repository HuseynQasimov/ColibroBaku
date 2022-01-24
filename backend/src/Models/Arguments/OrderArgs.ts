import { ArgsType, Field, ID, registerEnumType } from "type-graphql"

export enum OrderStatus {
  WAITING,
  InProgress,
  COMPLETED,
  DELIVERED
}

registerEnumType(OrderStatus, { name: "OrderStatus" })

@ArgsType()
export class orderData {
  @Field(() => [ID])
  productId: string[]

  @Field({ nullable: true })
  additions: string

  @Field(() => ID)
  userId: string

  @Field(() => OrderStatus, { defaultValue: OrderStatus.WAITING })
  status: OrderStatus

  @Field({ defaultValue: false, nullable: true })
  isCompleted: Boolean

  @Field({ defaultValue: false, nullable: true })
  delivered: Boolean
}
