import { Arg, Args, Mutation, Query, Resolver } from "type-graphql"
import { ProductResponse } from "../Helpers/productResponse"
import { productData } from "../Models/Arguments/ProductArgs"
import { Product } from "../Models/Entities/ProductEntity"
import { ProductService } from "../Services/ProductService"

@Resolver(Product)
export class ProductResolver {
  @Mutation(returns => ProductResponse)
  async addProduct (@Args() { model, title, description, price, imageUrl, productCode }: productData):
  Promise<ProductResponse> {
    try {
      const productInstance = new ProductService()
      const resp = await productInstance.add(model, title, description, price, imageUrl, productCode)
      return { products: [resp] }
    } catch (err: any) {
      return { errorMessage: err.message }
    }
  }

  @Mutation(returns => ProductResponse)
  async updateProduct (
    @Args() { model, title, description, price, imageUrl, productCode }: productData,
    @Arg("id") id: string
  ): Promise<ProductResponse> {
    try {
      const productInstance = new ProductService()

      const resp = await productInstance.update(id, model, title, description, price, imageUrl, productCode)
      return { products: [resp] }
    } catch (error: any) {
      return { errorMessage: error.message }
    }
  }

  @Mutation(returns => Boolean)
  async deleteProduct (@Arg("id") id: string): Promise<Boolean> {
    try {
      const productInstance = new ProductService()
      await productInstance.delete(id)
      return true
    } catch (error) {
      return false
    }
  }

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

  @Query(returns => ProductResponse, { nullable: true })
  async getProductById (@Arg("id") id:string):Promise<ProductResponse> {
    try {
      const productInstance = new ProductService()
      const resp = await productInstance.getById(id)
      return { products: [resp] }
    } catch (err: any) {
      return { errorMessage: err.message }
    }
  }
}
