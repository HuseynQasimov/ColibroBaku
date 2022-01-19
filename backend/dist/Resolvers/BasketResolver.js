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
exports.BasketResolver = void 0;
const type_graphql_1 = require("type-graphql");
const BasketArgs_1 = require("../Models/Arguments/BasketArgs");
const BasketEntity_1 = require("../Models/Entities/BasketEntity");
const BasketService_1 = require("../Services/BasketService");
let BasketResolver = class BasketResolver {
    constructor() {
        this.basketInstance = new BasketService_1.BasketService();
    }
    async shootBasket({ totalPrice, userId, productId, additions }) {
        const resp = await this.basketInstance.shoot(totalPrice, userId, productId, additions);
        return resp;
    }
    async getUserBasket(id) {
        try {
            const resp = await this.basketInstance.getBasket(id);
            return resp;
        }
        catch (error) {
            return error.message;
        }
    }
    async updateUserBasket(id, { additions, totalPrice, productId }) {
        try {
            const resp = this.basketInstance.update(id, additions, totalPrice, productId);
            return resp;
        }
        catch (error) {
            return error.message;
        }
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => BasketEntity_1.Basket),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BasketArgs_1.basketData]),
    __metadata("design:returntype", Promise)
], BasketResolver.prototype, "shootBasket", null);
__decorate([
    (0, type_graphql_1.Query)(() => BasketEntity_1.Basket),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BasketResolver.prototype, "getUserBasket", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => BasketEntity_1.Basket),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, BasketArgs_1.basketData]),
    __metadata("design:returntype", Promise)
], BasketResolver.prototype, "updateUserBasket", null);
BasketResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], BasketResolver);
exports.BasketResolver = BasketResolver;
//# sourceMappingURL=BasketResolver.js.map