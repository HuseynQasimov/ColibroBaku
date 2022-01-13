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
router.post("/upload", (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const file = req.files?.file;
    const uploadDir = "C:/Projects/ColibroBaku/colibrobaku-ui/public/images";
    // eslint-disable-next-line node/no-path-concat
    file.mv(`${uploadDir}/${file.name}`, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, url: `/images/${file.name}` });
    });
});
exports.default = router;
//# sourceMappingURL=restRoute.js.map