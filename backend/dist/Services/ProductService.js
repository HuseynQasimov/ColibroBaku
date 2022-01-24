"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const typeorm_1 = require("typeorm");
const ProductEntity_1 = require("../Models/Entities/ProductEntity");
class ProductService {
    async add(model, title, description, price, imageUrl, productCode) {
        const product = await ProductEntity_1.Product.findOne({ where: { productCode } });
        if (product) {
            throw new Error("Duplicate product");
        }
        try {
            const newProduct = await ProductEntity_1.Product.create({ model, title, description, price, imageUrl, productCode }).save();
            return newProduct;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async update(id, model, title, description, price, imageUrl, productCode) {
        try {
            const product = await ProductEntity_1.Product.findOne(id);
            if (!product) {
                throw new Error("Product is not found");
            }
            await ProductEntity_1.Product.update(product, { model, title, description, price, imageUrl, productCode });
            return product;
        }
        catch (error) {
            return error.message;
        }
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
    async delete(id) {
        const productRepository = (0, typeorm_1.getRepository)(ProductEntity_1.Product);
        const product = await productRepository.delete(id);
        if (product.affected === 0) {
            throw new Error("Product not deleted");
        }
        return product;
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map