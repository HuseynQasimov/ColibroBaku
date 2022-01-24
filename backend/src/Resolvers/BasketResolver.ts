import { Arg, Args, Mutation, Query, Resolver } from "type-graphql"
import { basketData } from "../Models/Arguments/BasketArgs"
import { Basket } from "../Models/Entities/BasketEntity"
import { BasketService } from "../Services/BasketService"

@Resolver()
export class BasketResolver {
  private basketInstance = new BasketService()

  @Mutation(() => Basket)
  async shootBasket (@Args()
    { userId, productId, additions }
    : basketData) {
    const resp = await this.basketInstance.shoot(userId, productId, additions)

    return resp
  }

  @Query(() => Basket)
  async getUserBasket (@Arg("id") id: string) {
    try {
      const resp = await this.basketInstance.getBasket(id)
      return resp
    } catch (error: any) {
      return error.message
    }
  }

  @Mutation(() => Basket)
  async updateUserBasket (
  @Arg("id") id: string,
    @Args() { additions, productId }: basketData) {
    try {
      const resp = this.basketInstance.update(id, additions, productId)
      return resp
    } catch (error :any) {
      return error.message
    }
  }
}
