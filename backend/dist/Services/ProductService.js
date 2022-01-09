"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const typeorm_1 = require("typeorm");
const ProductEntity_1 = require("../Models/Entities/ProductEntity");
class ProductService {
    async add(model, title, description, price, image, productCode) {
        const product = await ProductEntity_1.Product.findOne({ where: { productCode } });
        if (product) {
            throw new Error("Duplicate product");
        }
        const newProduct = await ProductEntity_1.Product.create({ model, title, description, price, image, productCode }).save();
        return newProduct;
    }
    async getProducts() {
        try {
            const productRepository = (0, typeorm_1.getRepository)(ProductEntity_1.Product);
            const products = await productRepository.find({});
            if (!products) {
                throw new Error("Product not found");
            }
            return products;
        }
        catch (error) {
            return error;
        }
    }
    async getById(id) {
        const productRepository = (0, typeorm_1.getRepository)(ProductEntity_1.Product);
        const product = await productRepository.findOne(id);
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map