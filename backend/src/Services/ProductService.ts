import { getRepository } from "typeorm"
import { Product } from "../Models/Entities/ProductEntity"

export class ProductService {
  async add (model: string, title: string, description: string, price: number, imageUrl: string, productCode: string) {
    const product = await Product.findOne({ where: { productCode } })
    if (product) {
      throw new Error("Duplicate product")
    }

    try {
      const newProduct = await Product.create({ model, title, description, price, imageUrl, productCode }).save()
      return newProduct
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async update (id: string, model: string, title: string, description:
    string, price: number, imageUrl: string, productCode: string) {
    try {
      const product = await Product.findOne(id)
      if (!product) {
        throw new Error("Product is not found")
      }

      await Product.update(product, { model, title, description, price, imageUrl, productCode })
      return product
    } catch (error: any) {
      return error.message
    }
  }

  async getProducts () {
    try {
      const productRepository = getRepository(Product)
      const products = await productRepository.find({})

      if (!products) {
        throw new Error("Product not found")
      }
      return products
    } catch (error) {
      return error
    }
  }

  async getById (id: string) {
    const productRepository = getRepository(Product)
    const product = await productRepository.findOne(id)

    if (!product) {
      throw new Error("Product not found")
    }

    return product
  }

  async delete (id: string) {
    const productRepository = getRepository(Product)
    const product = await productRepository.delete(id)
    if (product.affected === 0) {
      throw new Error("Product not deleted")
    }
    return product
  }
}
