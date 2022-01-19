import { Arg, Args, Ctx, Mutation, Query, Resolver, UseMiddleware } from "type-graphql"
import { Context } from "../Helpers/context"
import { UserResponse } from "../Helpers/userResponse"
import { isAuth } from "../Helpers/isAuth"
import { v4 } from "uuid"

import { loginData, signUpData } from "../Models/Arguments/UserArgs"
import { User } from "../Models/Entities/UserEntity"
import { UserService } from "../Services/UserService"
import { sendEmail } from "../Helpers/email"
import { Order } from "../Models/Entities/OrderEntity"

// type UserResponse = User | errorObject | String

@Resolver(User)
export class UserResolver {
  @Query(returns => [User], { nullable: true })
  async getAllUsers () {
    const allUsers = new UserService()
    const resp = allUsers.getUsers()

    return resp
  }

  @Query(returns => UserResponse)
  @UseMiddleware(isAuth)
  async userId (@Ctx() { payload }: Context): Promise<UserResponse> {
    if (!payload) {
      return { errorMessage: "Not Authorized" }
    }
    const user = await User.findOne({ where: { email: payload.email } })
    return { userData: user }
  }

  @Mutation(returns => UserResponse)
  async signUp (@Args() { firstname, lastname, phone, email, password, isAdmin }: signUpData): Promise<UserResponse> {
    const user = await User.findOne({ where: { email } })
    if (user) {
      return { errorMessage: "Email already signed up" }
    }

    try {
      const userInstance = new UserService()
      const resp = await userInstance.signUpService(firstname, lastname, phone, email, password, isAdmin)
      return { userData: resp }
    } catch (err: any) {
      return { errorMessage: err.message }
    }
  }

  @Mutation(returns => UserResponse)
  async login (
    @Ctx() { res }: Context,
      @Args() { email, password }: loginData): Promise<UserResponse> {
    try {
      const userInstance = new UserService()
      const resp = await userInstance.loginService(res, email, password)

      return { userData: resp }
    } catch (err: any) {
      return { errorMessage: err.message }
    }
  }

  @Query(() => User)
  async getUserOrders (@Arg("id") id: string) {
    const userInstance = new UserService()
    const resp = await userInstance.getOrders(id)

    return resp
  }

  @Query(returns => Boolean)
  logout (
  @Ctx() { res }: Context) {
    try {
      res.clearCookie("token")
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

  @Mutation(returns => UserResponse)
  async forgotPassword (@Arg("email") email: string, @Ctx() { redis }: Context): Promise<UserResponse> {
    const user = await User.findOne({ email })

    if (!user) {
      return { errorMessage: "Something went wrong" }
    }

    const token = v4()

    try {
      await redis.set("forgot-password" + token, user.id, "ex", 1000 * 60 * 60 * 24)

      const emailContent = `<a href="http://localhost:3000/user/${token}">Reset password</a>`
      await sendEmail(email, emailContent)

      return { userData: user }
    } catch (error:any) {
      return { errorMessage: error.message }
    }
  }

  @Mutation(returns => UserResponse)
  async resetPassword (
    @Arg("token") token: string,
      @Arg("newPassword") newPassword: string,
      @Ctx() { redis }: Context
  ): Promise<UserResponse> {
    try {
      const key = "forgot-password" + token
      const userId = await redis.get(key)

      if (!userId) {
        return { errorMessage: "Invalid token" }
      }
      const userInstance = new UserService()
      const user = await userInstance.resetPassword(userId, newPassword)
      await redis.del(key)

      return { userData: user }
    } catch (error: any) {
      return { errorMessage: error }
    }
  }
}
