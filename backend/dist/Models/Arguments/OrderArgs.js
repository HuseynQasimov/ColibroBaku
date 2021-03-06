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
exports.orderData = exports.OrderStatus = void 0;
const type_graphql_1 = require("type-graphql");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["WAITING"] = 0] = "WAITING";
    OrderStatus[OrderStatus["InProgress"] = 1] = "InProgress";
    OrderStatus[OrderStatus["COMPLETED"] = 2] = "COMPLETED";
    OrderStatus[OrderStatus["DELIVERED"] = 3] = "DELIVERED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
(0, type_graphql_1.registerEnumType)(OrderStatus, { name: "OrderStatus" });
let orderData = class orderData {
};
__decorate([
    (0, type_graphql_1.Field)(() => [type_graphql_1.ID]),
    __metadata("design:type", Array)
], orderData.prototype, "productId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], orderData.prototype, "additions", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], orderData.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => OrderStatus, { defaultValue: OrderStatus.WAITING }),
    __metadata("design:type", Number)
], orderData.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: false, nullable: true }),
    __metadata("design:type", Boolean)
], orderData.prototype, "isCompleted", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: false, nullable: true }),
    __metadata("design:type", Boolean)
], orderData.prototype, "delivered", void 0);
orderData = __decorate([
    (0, type_graphql_1.ArgsType)()
], orderData);
exports.orderData = orderData;
//# sourceMappingURL=OrderArgs.js.map