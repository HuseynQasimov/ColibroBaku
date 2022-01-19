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
exports.OrderResolver = void 0;
const type_graphql_1 = require("type-graphql");
const OrderArgs_1 = require("../Models/Arguments/OrderArgs");
const OrderEntity_1 = require("../Models/Entities/OrderEntity");
const OrderService_1 = require("../Services/OrderService");
let OrderResolver = class OrderResolver {
    async createOrder({ price, isCompleted, delivered, userId, productId, additions }) {
        const orderInstance = new OrderService_1.OrderService();
        const resp = await orderInstance.create(price, isCompleted, delivered, userId, productId, additions);
        return resp;
    }
    async getOrderById(id) {
        try {
            const orderInstance = new OrderService_1.OrderService();
            const resp = await orderInstance.getOne(id);
            return resp;
        }
        catch (error) {
            console.log(error.message);
        }
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(returns => OrderEntity_1.Order),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderArgs_1.orderData]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "createOrder", null);
__decorate([
    (0, type_graphql_1.Query)(returns => OrderEntity_1.Order),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrderById", null);
OrderResolver = __decorate([
    (0, type_graphql_1.Resolver)(OrderEntity_1.Order)
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=OrderResolver.js.map