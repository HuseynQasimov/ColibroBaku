"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const type_graphql_1 = require("type-graphql");
const productResponse_1 = require("../Helpers/productResponse");
const ProductArgs_1 = require("../Models/Arguments/ProductArgs");
const ProductEntity_1 = require("../Models/Entities/ProductEntity");
const ProductService_1 = require("../Services/ProductService");
let ProductResolver = class ProductResolver {
    async addProduct({ model, title, description, price, imageUrl, productCode }) {
        try {
            const productInstance = new ProductService_1.ProductService();
            const resp = await productInstance.add(model, title, description, price, imageUrl, productCode);
            return { products: [resp] };
        }
        catch (err) {
            return { errorMessage: err.message };
        }
    }
    // @Mutation()
    // async updateProduct () {
    //   return true
    // }
    async deleteProduct(id) {
        try {
            const productInstance = new ProductService_1.ProductService();
            await productInstance.delete(id);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async getAllProducts() {
        try {
            const productInstance = new ProductService_1.ProductService();
            const resp = await productInstance.getProducts();
            return { products: resp };
        }
        catch (err) {
            return { errorMessage: err.message };
        }
    }
    async getProductById(id) {
        try {
            const productInstance = new ProductService_1.ProductService();
            const resp = await productInstance.getById(id);
            return { products: [resp] };
        }
        catch (err) {
            return { errorMessage: err.message };
        }
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(returns => productResponse_1.ProductResponse),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductArgs_1.productData]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "addProduct", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
__decorate([
    (0, type_graphql_1.Query)(returns => productResponse_1.ProductResponse, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getAllProducts", null);
__decorate([
    (0, type_graphql_1.Query)(returns => productResponse_1.ProductResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProductById", null);
ProductResolver = __decorate([
    (0, type_graphql_1.Resolver)(ProductEntity_1.Product)
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=ProductResolver.js.map