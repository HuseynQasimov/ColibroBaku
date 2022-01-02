"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const typeorm_1 = require("typeorm");
const ProductEntity_1 = require("../Models/Entities/ProductEntity");
class ProductService {
    async add(model, title, description, price, images, productCode) {
        const product = await ProductEntity_1.Product.findOne({ where: { productCode } });
        if (product) {
            throw new Error("Duplicate product");
        }
        const newProduct = await ProductEntity_1.Product.create({ model, title, description, price, images, productCode }).save();
        return newProduct;
    }
    async getProducts() {
        const productRepository = (0, typeorm_1.getRepository)(ProductEntity_1.Product);
        const products = await productRepository.find({});
        return products;
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map