"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const uploadDir = "C:/Projects/ColibroBaku/colibrobaku-ui/public/images/RegisterFailed.png";
const outPut = "C:/Projects/ColibroBaku/colibrobaku-ui/public/images/RegisterFailedResized.png";
const ResizeImage = () => {
    (0, sharp_1.default)(uploadDir).resize({ height: 905, width: 1080 }).toFile(outPut)
        .then((newFileInfo) => {
        console.log("newFileInfo", newFileInfo);
    })
        .catch(err => {
        console.log("err", err);
    });
};
exports.ResizeImage = ResizeImage;
//# sourceMappingURL=ResizeImage.js.map