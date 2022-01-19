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
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const userResponse_1 = require("../Helpers/userResponse");
const isAuth_1 = require("../Helpers/isAuth");
const uuid_1 = require("uuid");
const UserArgs_1 = require("../Models/Arguments/UserArgs");
const UserEntity_1 = require("../Models/Entities/UserEntity");
const UserService_1 = require("../Services/UserService");
const email_1 = require("../Helpers/email");
// type UserResponse = User | errorObject | String
let UserResolver = class UserResolver {
    async getAllUsers() {
        const allUsers = new UserService_1.UserService();
        const resp = allUsers.getUsers();
        return resp;
    }
    async userId({ payload }) {
        if (!payload) {
            return { errorMessage: "Not Authorized" };
        }
        const user = await UserEntity_1.User.findOne({ where: { email: payload.email } });
        return { userData: user };
    }
    async signUp({ firstname, lastname, phone, email, password, isAdmin }) {
        const user = await UserEntity_1.User.findOne({ where: { email } });
        if (user) {
            return { errorMessage: "Email already signed up" };
        }
        try {
            const userInstance = new UserService_1.UserService();
            const resp = await userInstance.signUpService(firstname, lastname, phone, email, password, isAdmin);
            return { userData: resp };
        }
        catch (err) {
            return { errorMessage: err.message };
        }
    }
    async login({ res }, { email, password }) {
        try {
            const userInstance = new UserService_1.UserService();
            const resp = await userInstance.loginService(res, email, password);
            return { userData: resp };
        }
        catch (err) {
            return { errorMessage: err.message };
        }
    }
    async getUserOrders(id) {
        const userInstance = new UserService_1.UserService();
        const resp = await userInstance.getOrders(id);
        return resp;
    }
    logout({ res }) {
        try {
            res.clearCookie("token");
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
    async forgotPassword(email, { redis }) {
        const user = await UserEntity_1.User.findOne({ email });
        if (!user) {
            return { errorMessage: "Something went wrong" };
        }
        const token = (0, uuid_1.v4)();
        try {
            await redis.set("forgot-password" + token, user.id, "ex", 1000 * 60 * 60 * 24);
            const emailContent = `<a href="http://localhost:3000/user/${token}">Reset password</a>`;
            await (0, email_1.sendEmail)(email, emailContent);
            return { userData: user };
        }
        catch (error) {
            return { errorMessage: error.message };
        }
    }
    async resetPassword(token, newPassword, { redis }) {
        try {
            const key = "forgot-password" + token;
            const userId = await redis.get(key);
            if (!userId) {
                return { errorMessage: "Invalid token" };
            }
            const userInstance = new UserService_1.UserService();
            const user = await userInstance.resetPassword(userId, newPassword);
            await redis.del(key);
            return { userData: user };
        }
        catch (error) {
            return { errorMessage: error };
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [UserEntity_1.User], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getAllUsers", null);
__decorate([
    (0, type_graphql_1.Query)(returns => userResponse_1.UserResponse),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "userId", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => userResponse_1.UserResponse),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserArgs_1.signUpData]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "signUp", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => userResponse_1.UserResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UserArgs_1.loginData]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Query)(() => UserEntity_1.User),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserOrders", null);
__decorate([
    (0, type_graphql_1.Query)(returns => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "logout", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => userResponse_1.UserResponse),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "forgotPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => userResponse_1.UserResponse),
    __param(0, (0, type_graphql_1.Arg)("token")),
    __param(1, (0, type_graphql_1.Arg)("newPassword")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "resetPassword", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(UserEntity_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UserResolver.js.map