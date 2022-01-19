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
exports.Basket = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const ProductEntity_1 = require("./ProductEntity");
const UserEntity_1 = require("./UserEntity");
let Basket = class Basket extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Basket.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int),
    (0, typeorm_1.Column)("int"),
    __metadata("design:type", Number)
], Basket.prototype, "totalPrice", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Basket.prototype, "additions", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [ProductEntity_1.Product]),
    (0, typeorm_1.ManyToMany)(() => ProductEntity_1.Product),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Basket.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => UserEntity_1.User, user => user.basket),
    __metadata("design:type", UserEntity_1.User)
], Basket.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Basket.prototype, "updateDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Basket.prototype, "creationDate", void 0);
Basket = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: "basket" })
], Basket);
exports.Basket = Basket;
//# sourceMappingURL=BasketEntity.js.map