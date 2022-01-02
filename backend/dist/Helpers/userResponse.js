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
exports.UserResponse = void 0;
const type_graphql_1 = require("type-graphql");
const UserEntity_1 = require("../Models/Entities/UserEntity");
// ObjectType()
// class Error {
//   @Field(returns => String)
//   message: string
// }
let UserResponse = class UserResponse {
};
__decorate([
    (0, type_graphql_1.Field)(returns => String, { nullable: true }),
    __metadata("design:type", String)
], UserResponse.prototype, "errorMessage", void 0);
__decorate([
    (0, type_graphql_1.Field)(returns => UserEntity_1.User, { nullable: true }),
    __metadata("design:type", UserEntity_1.User)
], UserResponse.prototype, "userData", void 0);
UserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserResponse);
exports.UserResponse = UserResponse;
//# sourceMappingURL=userResponse.js.map