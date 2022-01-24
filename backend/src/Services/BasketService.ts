import { Service } from "typedi"
import { Basket } from "../Models/Entities/BasketEntity"
import { Product } from "../Models/Entities/ProductEntity"
import { User } from "../Models/Entities/UserEntity"

@Service()
export class BasketService {
  async shoot (userId: string, productId: string, additions: string) {
    const creationDate = new Date()

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
    const product = await Product.findOne(productId)

    if (!user || !product) {
      throw new Error("Something went wrong")
    }

    let totalPrice = 0
    if (user?.basket.products.price) {
      totalPrice = user?.basket.products.price + product?.price
    } else {
      totalPrice = product.price
    }

    const goal = await Basket.create({
      totalPrice,
      user,
      products: product,
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

  async update (userId: string, additions: string, productId: string) {

  }

  async remove () {

  }
}
