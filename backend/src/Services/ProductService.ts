import { getRepository } from "typeorm"
import { Product } from "../Models/Entities/ProductEntity"

export class ProductService {
  async add (model: string, title: string, description: string, price: number, image: string, productCode: string) {
    const product = await Product.findOne({ where: { productCode } })
    if (product) {
      throw new Error("Duplicate product")
    }

    const newProduct = await Product.create({ model, title, description, price, image, productCode }).save()

    return newProduct
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
}
