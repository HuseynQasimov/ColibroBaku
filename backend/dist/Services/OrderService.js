"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const OrderArgs_1 = require("../Models/Arguments/OrderArgs");
const OrderEntity_1 = require("../Models/Entities/OrderEntity");
const ProductEntity_1 = require("../Models/Entities/ProductEntity");
const UserEntity_1 = require("../Models/Entities/UserEntity");
class OrderService {
    async create(userId, productId, additions) {
        const user = await UserEntity_1.User.findOne({ id: userId });
        const products = await ProductEntity_1.Product.findByIds(productId);
        let totalPrice = 0;
        if (products.length > 0) {
            for (let i = 0; i < products.length; i++) {
                totalPrice += products[i].price;
            }
        }
        else {
            console.error("Product is not found");
            throw new Error("Something went wrong");
        }
        const order = await OrderEntity_1.Order.create({
            status: OrderArgs_1.OrderStatus.WAITING,
            totalPrice,
            additions,
            user,
            products
        }).save();
        return order;
    }
    // async getOne (id: string) {
    //   const order = await Order.createQueryBuilder("order")
    //     .leftJoinAndSelect("order.products", "product")
    //     .where("order.id = :id", { id })
    //     .getOne()
    //   console.log(order)
    //   return order
    // }
    async update(id, status) {
        const order = await OrderEntity_1.Order.findOne(id);
        if (!order) {
            throw new Error("Order not found");
        }
        if (status <= order.status) {
            throw new Error("Can't change status");
        }
        switch (status) {
            case 2:
                order.completedDate = new Date();
                break;
            case 3:
                order.deliveredDate = new Date();
                break;
            default:
                break;
        }
        order.status = status;
        const updatedOrder = await order.save();
        return updatedOrder;
    }
    async removeById(id) {
        const order = await OrderEntity_1.Order.createQueryBuilder("order")
            .leftJoinAndSelect("order.products", "product")
            .where("order.id = :id", { id })
            .getOne();
        const resp = await order?.remove();
        if (!resp) {
            console.log("Order not found");
            throw new Error("Something went wrong");
        }
        return true;
    }
    async getAll() {
        const orders = await OrderEntity_1.Order.find({
            join: {
                alias: "order",
                leftJoinAndSelect: {
                    user: "order.user",
                    product: "order.products"
                }
            }
        });
        if (!orders) {
            throw new Error("Orders list is empty");
        }
        return orders;
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=OrderService.js.map