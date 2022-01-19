import * as bcrypt from "bcryptjs"
import { getRepository } from "typeorm"

import { User } from "../Models/Entities/UserEntity"
import { createAccessToken, createRefreshToken } from "../Helpers/createToken"
import { Order } from "../Models/Entities/OrderEntity"

export class UserService {
  async getUsers () {
    const userRepository = getRepository(User)
    const allUsers = await userRepository.find({})

    return allUsers
  }

  async signUpService (firstname:string, lastname:string, phone:string, email:string, password:string, isAdmin: Boolean) {
    const hashedPass = await bcrypt.hash(password, 12)
    try {
      const user = await User.create({
        firstname,
        lastname,
        phone,
        email,
        password: hashedPass,
        isAdmin
      }).save()
      return user
    } catch {
      throw new Error("Something went wrong")
    }
  }

  async getOrders (userId: string) {
    // const orders = await User.findOne({ relations: ["orders"], where: { id: userId } })
    // const orders = await User.createQueryBuilder("user")
    //   .leftJoinAndSelect("user.orders", "orders")
    //   .leftJoinAndSelect("user.orders.products", "product")
    //   .where("user.id = :id", { id: userId })
    //   .getOne()
    const orders = await User.findOne({
      where: {
        id: userId
      },
      join: {
        alias: "user",
        leftJoinAndSelect: {
          order: "user.orders",
          product: "order.products"
        }
      }
    })
    console.log(orders)
    return orders
  }

  async loginService (res: any, email: string, password: string) {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw new Error("Email or password is incorrect")
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password)

    if (!isCorrectPassword) {
      throw new Error("Email or password is incorrect")
    }

    res.cookie("token", createAccessToken(user))

    createRefreshToken(user)

    return user
  }

  async resetPassword (userId: string, newPassword: string) {
    try {
      const user = await User.findOne({ id: userId })
      if (!user) {
        throw new Error("Something went wrong")
      }

      const hashedPass = await bcrypt.hash(newPassword, 12)
      await User.update(user, { password: hashedPass })
      return user
    } catch (error) {
      throw new Error("Something went wrong")
    }
  }
}
