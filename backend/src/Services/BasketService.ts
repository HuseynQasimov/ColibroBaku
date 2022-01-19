import { Service } from "typedi"
import { Basket } from "../Models/Entities/BasketEntity"
import { Product } from "../Models/Entities/ProductEntity"
import { User } from "../Models/Entities/UserEntity"

@Service()
export class BasketService {
  async shoot (totalPrice: number, userId: string, productId: string[], additions: string) {
    const creationDate = new Date()

    const user = await User.findOne({ id: userId })
    const products = await Product.findByIds(productId)

    const goal = await Basket.create({
      totalPrice,
      user,
      products,
      additions,
      creationDate
    }).save()

    return goal
  }

  async getBasket (userId: string) {
    const user = await User.findOne({
      where: {
        id: userId
      },
      join: {
        alias: "user",
        leftJoinAndSelect: {
          basket: "user.basket",
          product: "basket.products"
        }
      }
    })

    if (!user?.basket) {
      throw new Error("User's basket is empty")
    }

    return user.basket
  }

  async update (userId: string, additions: string, totalPrice: number, productId: string[]) {

  }

  async remove () {

  }
}
