"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketService = void 0;
const typedi_1 = require("typedi");
const BasketEntity_1 = require("../Models/Entities/BasketEntity");
const ProductEntity_1 = require("../Models/Entities/ProductEntity");
const UserEntity_1 = require("../Models/Entities/UserEntity");
let BasketService = class BasketService {
    async shoot(userId, productId, additions) {
        const creationDate = new Date();
        const user = await UserEntity_1.User.findOne({
            where: {
                id: userId
            },
            join: {
                alias: "user",
                leftJoinAndSelect: {
                    basket: "user.basket",
                    product: "basket.products"
                }
            }
        });
        const product = await ProductEntity_1.Product.findOne(productId);
        if (!user || !product) {
            throw new Error("Something went wrong");
        }
        let totalPrice = 0;
        if (user?.basket.products.price) {
            totalPrice = user?.basket.products.price + product?.price;
        }
        else {
            totalPrice = product.price;
        }
        const goal = await BasketEntity_1.Basket.create({
            totalPrice,
            user,
            products: product,
            additions,
            creationDate
        }).save();
        return goal;
    }
    async getBasket(userId) {
        const user = await UserEntity_1.User.findOne({
            where: {
                id: userId
            },
            join: {
                alias: "user",
                leftJoinAndSelect: {
                    basket: "user.basket",
                    product: "basket.products"
                }
            }
        });
        if (!user?.basket) {
            throw new Error("User's basket is empty");
        }
        return user.basket;
    }
    async update(userId, additions, productId) {
    }
    async remove() {
    }
};
BasketService = __decorate([
    (0, typedi_1.Service)()
], BasketService);
exports.BasketService = BasketService;
//# sourceMappingURL=BasketService.js.map