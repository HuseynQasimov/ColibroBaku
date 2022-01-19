import { Arg, Args, Mutation, Query, Resolver } from "type-graphql"
import { orderData } from "../Models/Arguments/OrderArgs"
import { Order } from "../Models/Entities/OrderEntity"
import { OrderService } from "../Services/OrderService"

@Resolver(Order)
export class OrderResolver {
  @Mutation(returns => Order)
  async createOrder (@Args()
    { price, isCompleted, delivered, userId, productId, additions }
    : orderData): Promise<Order> {
    const orderInstance = new OrderService()
    const resp = await orderInstance.create(price, isCompleted, delivered, userId, productId, additions)

    return resp
  }

  @Query(returns => Order)
  async getOrderById (@Arg("id") id: string) {
    try {
      const orderInstance = new OrderService()
      const resp = await orderInstance.getOne(id)

      return resp
    } catch (error: any) {
      console.log(error.message)
    }
  }
}
