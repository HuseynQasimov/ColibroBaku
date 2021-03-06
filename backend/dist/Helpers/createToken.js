"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRefreshToken = exports.createAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const createAccessToken = (user) => {
    return (0, jsonwebtoken_1.sign)({ id: user.id, name: user.firstname, isAdmin: user.isAdmin }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30d", algorithm: "HS256" });
};
exports.createAccessToken = createAccessToken;
const createRefreshToken = (user) => {
    return (0, jsonwebtoken_1.sign)({ id: user.id, name: user.firstname, isAdmin: user.isAdmin }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d", algorithm: "HS256" });
};
exports.createRefreshToken = createRefreshToken;
//# sourceMappingURL=createToken.js.map