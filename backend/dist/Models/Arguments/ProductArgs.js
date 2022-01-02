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
exports.productData = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let productData = class productData {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(3, 24),
    __metadata("design:type", String)
], productData.prototype, "model", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(3, 24),
    __metadata("design:type", String)
], productData.prototype, "productCode", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(6, 64),
    __metadata("design:type", String)
], productData.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(6, 124),
    __metadata("design:type", String)
], productData.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], productData.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], productData.prototype, "images", void 0);
productData = __decorate([
    (0, type_graphql_1.ArgsType)()
], productData);
exports.productData = productData;
//# sourceMappingURL=ProductArgs.js.map