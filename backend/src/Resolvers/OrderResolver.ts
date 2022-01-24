import { Arg, Args, Mutation, Query, Resolver } from "type-graphql"
import { orderData, OrderStatus } from "../Models/Arguments/OrderArgs"
import { Order } from "../Models/Entities/OrderEntity"
import { OrderService } from "../Services/OrderService"

@Resolver(Order)
export class OrderResolver {
  private orderInstance = new OrderService()
  @Mutation(returns => Order)
  async createOrder (@Args()
    { userId, productId, additions }
    : orderData): Promise<Order> {
    try {
      const resp = await this.orderInstance.create(userId, productId, additions)
      return resp
    } catch (error: any) {
      console.error(error.message)
      throw new Error("Something went wrong")
    }
  }

  @Query(returns => Boolean)
  async removeOrderById (@Arg("id") id: string): Promise<Boolean> {
    try {
      await this.orderInstance.removeById(id)
      return true
    } catch (error: any) {
      return false
    }
  }

  @Query(returns => [Order])
  async getAllOrders () {
    try {
      const resp = await this.orderInstance.getAll()
      return resp
    } catch (error: any) {
      return error.message
    }
  }

  @Mutation(returns => Order)
  async updateOrder (
  @Arg("id") id: string,
    @Arg("status") status: OrderStatus
  ) {
    try {
      const resp = await this.orderInstance.update(id, status)
      return resp
    } catch (error: any) {
      return error.message
    }
  }

  // @Query(returns => Order)
  // async getOrderById (@Arg("id") id: string) {
  //   try {
  //     const orderInstance = new OrderService()
  //     const resp = await orderInstance.getOne(id)

  //     return resp
  //   } catch (error: any) {
  //     console.log(error.message)
  //   }
  // }
}
