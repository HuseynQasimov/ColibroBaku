"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const OrderEntity_1 = require("../Models/Entities/OrderEntity");
const ProductEntity_1 = require("../Models/Entities/ProductEntity");
const UserEntity_1 = require("../Models/Entities/UserEntity");
class OrderService {
    async create(price, isCompleted, delivered, userId, productId, additions) {
        let completedDate;
        let deliveredDate;
        const creationDate = new Date();
        if (isCompleted === true) {
            completedDate = new Date();
        }
        if (delivered === true) {
            deliveredDate = new Date();
        }
        const user = await UserEntity_1.User.findOne({ id: userId });
        const products = await ProductEntity_1.Product.findByIds(productId);
        const order = await OrderEntity_1.Order.create({
            price,
            additions,
            completedDate,
            deliveredDate,
            creationDate,
            user,
            products
        }).save();
        return order;
    }
    async getOne(id) {
        const order = await OrderEntity_1.Order.createQueryBuilder("order")
            .leftJoinAndSelect("order.products", "product")
            .where("order.id = :id", { id })
            .getOne();
        console.log(order);
        return order;
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=OrderService.js.map