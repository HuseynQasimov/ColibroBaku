import { orderData, OrderStatus } from "../Models/Arguments/OrderArgs"
import { Order } from "../Models/Entities/OrderEntity"
import { Product } from "../Models/Entities/ProductEntity"
import { User } from "../Models/Entities/UserEntity"

export class OrderService {
  async create (userId: string, productId: string[], additions: string) {
    const user = await User.findOne({ id: userId })
    const products = await Product.findByIds(productId)

    let totalPrice: number = 0
    if (products.length > 0) {
      for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price
      }
    } else {
      console.error("Product is not found")
      throw new Error("Something went wrong")
    }

    const order = await Order.create(
      {
        status: OrderStatus.WAITING,
        totalPrice,
        additions,
        user,
        products
      }
    ).save()

    return order
  }

  // async getOne (id: string) {
  //   const order = await Order.createQueryBuilder("order")
  //     .leftJoinAndSelect("order.products", "product")
  //     .where("order.id = :id", { id })
  //     .getOne()

  //   console.log(order)
  //   return order
  // }

  async update (id: string, status: OrderStatus) {
    const order = await Order.findOne(id)
    if (!order) {
      throw new Error("Order not found")
    }

    if (status <= order.status) {
      throw new Error("Can't change status")
    }

    switch (status) {
      case 2:
        order.completedDate = new Date()
        break
      case 3:
        order.deliveredDate = new Date()
        break
      default:
        break
    }
    order.status = status
    const updatedOrder = await order.save()
    return updatedOrder
  }

  async removeById (id: string) {
    const order = await Order.createQueryBuilder("order")
      .leftJoinAndSelect("order.products", "product")
      .where("order.id = :id", { id })
      .getOne()

    const resp = await order?.remove()

    if (!resp) {
      console.log("Order not found")
      throw new Error("Something went wrong")
    }
    return true
  }

  async getAll () {
    const orders = await Order.find({
      join: {
        alias: "order",
        leftJoinAndSelect: {
          user: "order.user",
          product: "order.products"
        }
      }
    })

    if (!orders) {
      throw new Error("Orders list is empty")
    }

    return orders
  }
}
