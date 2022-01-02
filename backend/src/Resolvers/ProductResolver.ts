import { Args, Mutation, Query, Resolver } from "type-graphql"
import { ProductResponse } from "../Helpers/productResponse"
import { productData } from "../Models/Arguments/ProductArgs"
import { Product } from "../Models/Entities/ProductEntity"
import { ProductService } from "../Services/ProductService"

@Resolver(Product)
export class ProductResolver {
  @Mutation(returns => Boolean)
  async addProduct (@Args() { model, title, description, price, images, productCode }: productData):
  Promise<Boolean> {
    try {
      const productInstance = new ProductService()
      await productInstance.add(model, title, description, price, images, productCode)
      return true
    } catch (err) {
      return false
    }
  }

  // @Mutation()
  // async updateProduct () {
  //   return true
  // }

  // @Mutation()
  // async deleteProduct () {
  //   return true
  // }

  @Query(returns => ProductResponse, { nullable: true })
  async getAllProducts () {
    try {
      const productInstance = new ProductService()
      const resp = await productInstance.getProducts()
      return { products: resp }
    } catch (err: any) {
      return { errorMessage: err.message }
    }
  }
}
