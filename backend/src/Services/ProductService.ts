import { getRepository } from "typeorm"
import { Product } from "../Models/Entities/ProductEntity"

export class ProductService {
  async add (model: string, title: string, description: string, price: number, images: string, productCode: string) {
    const product = await Product.findOne({ where: { productCode } })
    if (product) {
      throw new Error("Duplicate product")
    }

    const newProduct = await Product.create({ model, title, description, price, images, productCode }).save()

    return newProduct
  }

  async getProducts () {
    const productRepository = getRepository(Product)
    const products = await productRepository.find({})
    return products
  }
}
