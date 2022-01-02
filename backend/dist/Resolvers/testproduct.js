"use strict";
// import { Mutation, Query, Resolver } from "type-graphql"
// import { UserResponse } from "../Helpers/userResponse"
// import { User } from "../Models/Entities/UserEntity"
// import { UserService } from "../Services/UserService"
// import { Product } from "../Models/Entities/ProductEntity"
// import { ProductResponse } from "../Helpers/productResponse"
// import { ProductService } from "../Services/ProductService"
// @Resolver(Product)
// export class ProductResolver {
//   @Query(returns => [User], { nullable: true })
//   async getAllUsers () {
//     const allUsers = new UserService()
//     const resp = allUsers.getUsers()
//     return resp
//   }
//   @Query(returns => ProductResponse)
//   async allproducts (): Promise<ProductResponse> {
//     const productInstance = new ProductService()
//     const products = await productInstance.getProducts()
//     console.log({ product: products })
//     // const products = await Product.find()
//     return { products: products }
//   }
//   // @Mutation(returns => UserResponse)
//   // async addProduct (): Promise<UserResponse> {
//   //   try {
//   //     const productInstance = new Product()
//   //     productInstance.add
//   //   } catch (err: any) {
//   //   }
//   // }
// }
//# sourceMappingURL=testproduct.js.map