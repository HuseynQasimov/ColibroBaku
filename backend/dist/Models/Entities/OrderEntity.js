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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const OrderArgs_1 = require("../Arguments/OrderArgs");
const ProductEntity_1 = require("./ProductEntity");
const UserEntity_1 = require("./UserEntity");
let Order = class Order extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int),
    (0, typeorm_1.Column)("int"),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Order.prototype, "completedDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Order.prototype, "deliveredDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [ProductEntity_1.Product]),
    (0, typeorm_1.ManyToMany)(() => ProductEntity_1.Product),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "additions", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => UserEntity_1.User),
    (0, typeorm_1.ManyToOne)(() => UserEntity_1.User, user => user.orders),
    __metadata("design:type", UserEntity_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Order.prototype, "createdDate", void 0);
Order = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: "orders" })
], Order);
exports.Order = Order;
//# sourceMappingURL=OrderEntity.js.map