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
exports.loginData = exports.signUpData = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let signUpData = class signUpData {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(3, 24),
    __metadata("design:type", String)
], signUpData.prototype, "firstname", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(3, 24),
    __metadata("design:type", String)
], signUpData.prototype, "lastname", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(13),
    __metadata("design:type", String)
], signUpData.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(6, 64),
    __metadata("design:type", String)
], signUpData.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(6, 24),
    __metadata("design:type", String)
], signUpData.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: false, nullable: true }),
    __metadata("design:type", Boolean)
], signUpData.prototype, "isAdmin", void 0);
signUpData = __decorate([
    (0, type_graphql_1.ArgsType)()
], signUpData);
exports.signUpData = signUpData;
let loginData = class loginData {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], loginData.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], loginData.prototype, "password", void 0);
loginData = __decorate([
    (0, type_graphql_1.ArgsType)()
], loginData);
exports.loginData = loginData;
//# sourceMappingURL=UserArgs.js.map