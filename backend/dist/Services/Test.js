"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const UserEntity_1 = require("../Models/Entities/UserEntity");
class Test {
    async getBasket(userId) {
        const user = await UserEntity_1.User.findOne({
            where: {
                id: userId
            },
            join: {
                alias: "user",
                leftJoinAndSelect: {
                    basket: "user.basket",
                    product: "basket.products"
                }
            }
        });
        if (!user?.basket) {
            throw new Error("User's basket is empty");
        }
        return user?.basket;
    }
}
exports.Test = Test;
//# sourceMappingURL=Test.js.map