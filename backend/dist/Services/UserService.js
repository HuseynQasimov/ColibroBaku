"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt = __importStar(require("bcryptjs"));
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("../Models/Entities/UserEntity");
const createToken_1 = require("../Helpers/createToken");
class UserService {
    async getUsers() {
        const userRepository = (0, typeorm_1.getRepository)(UserEntity_1.User);
        const allUsers = await userRepository.find({});
        return allUsers;
    }
    async signUpService(firstname, lastname, phone, email, password, isAdmin) {
        const hashedPass = await bcrypt.hash(password, 12);
        try {
            const user = await UserEntity_1.User.create({
                firstname,
                lastname,
                phone,
                email,
                password: hashedPass,
                isAdmin
            }).save();
            return user;
        }
        catch {
            throw new Error("Something went wrong");
        }
    }
    async getOrders(userId) {
        // const orders = await User.findOne({ relations: ["orders"], where: { id: userId } })
        // const orders = await User.createQueryBuilder("user")
        //   .leftJoinAndSelect("user.orders", "orders")
        //   .leftJoinAndSelect("user.orders.products", "product")
        //   .where("user.id = :id", { id: userId })
        //   .getOne()
        const user = await UserEntity_1.User.findOne({
            where: {
                id: userId
            },
            join: {
                alias: "user",
                leftJoinAndSelect: {
                    order: "user.orders",
                    product: "order.products"
                }
            }
        });
        console.log(user?.orders);
        return user?.orders;
    }
    async loginService(res, email, password) {
        const user = await UserEntity_1.User.findOne({ where: { email } });
        if (!user) {
            throw new Error("Email or password is incorrect");
        }
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!isCorrectPassword) {
            throw new Error("Email or password is incorrect");
        }
        res.cookie("token", (0, createToken_1.createAccessToken)(user));
        (0, createToken_1.createRefreshToken)(user);
        return user;
    }
    async resetPassword(userId, newPassword) {
        try {
            const user = await UserEntity_1.User.findOne({ id: userId });
            if (!user) {
                throw new Error("Something went wrong");
            }
            const hashedPass = await bcrypt.hash(newPassword, 12);
            await UserEntity_1.User.update(user, { password: hashedPass });
            return user;
        }
        catch (error) {
            throw new Error("Something went wrong");
        }
    }
    async getById(id) {
        const user = await UserEntity_1.User.findOne(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
    async userAndOrders(userId) {
        // const orders = await User.findOne({ relations: ["orders"], where: { id: userId } })
        // const orders = await User.createQueryBuilder("user")
        //   .leftJoinAndSelect("user.orders", "orders")
        //   .leftJoinAndSelect("user.orders.products", "product")
        //   .where("user.id = :id", { id: userId })
        //   .getOne()
        const user = await UserEntity_1.User.findOne({
            where: {
                id: userId
            },
            join: {
                alias: "user",
                leftJoinAndSelect: {
                    order: "user.orders",
                    product: "order.products"
                }
            }
        });
        if (!user) {
            throw new Error("User not found");
        }
        console.log(user);
        return user;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map