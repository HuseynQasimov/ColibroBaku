"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = require("jsonwebtoken");
const UserEntity_1 = require("../Models/Entities/UserEntity");
const createToken_1 = require("./createToken");
const router = (0, express_1.default)();
router.post("/refresh-token", async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.send({ ok: false, accessToken: "" });
    }
    let payload = null;
    try {
        payload = (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_TOKEN_SECRET);
    }
    catch (error) {
        return res.send({ ok: false, accessToken: "" });
    }
    const user = await UserEntity_1.User.findOne({ email: payload.email });
    if (!user) {
        return res.send({ ok: false, accessToken: "" });
    }
    return res.send({ ok: true, accessToken: (0, createToken_1.createRefreshToken)(user) });
});
exports.default = router;
//# sourceMappingURL=restRoute.js.map