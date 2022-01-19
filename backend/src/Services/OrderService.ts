import { Order } from "../Models/Entities/OrderEntity"
import { Product } from "../Models/Entities/ProductEntity"
import { User } from "../Models/Entities/UserEntity"

export class OrderService {
  async create (price: number, isCompleted: Boolean, delivered: Boolean, userId: string,
    productId: string[], additions: string) {
    let completedDate: Date | undefined
    let deliveredDate: Date | undefined

    const creationDate = new Date()
    if (isCompleted === true) {
      completedDate = new Date()
    }
    if (delivered === true) {
      deliveredDate = new Date()
    }

    const user = await User.findOne({ id: userId })
    const products = await Product.findByIds(productId)

    const order = await Order.create(
      {
        price,
        additions,
        completedDate,
        deliveredDate,
        creationDate,
        user,
        products
      }
    ).save()

    return order
  }

  async getOne (id: string) {
    const order = await Order.createQueryBuilder("order")
      .leftJoinAndSelect("order.products", "product")
      .where("order.id = :id", { id })
      .getOne()

    console.log(order)
    return order
  }

  // async update () {

  // }

  // async delete () {

  // }

  // async getAll () {

  // }
}
