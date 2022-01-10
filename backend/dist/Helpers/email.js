"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
async function sendEmail(receiver, content) {
    const transporter = nodemailer_1.default.createTransport({
        pool: true,
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "greatcharlie717@gmail.com",
            pass: "wflcdxtttuzdznjn"
        }
    });
    const info = await transporter.sendMail({
        from: "greatcharlie717@gmail.com",
        to: receiver,
        subject: "Password reset request",
        html: content // html body
    });
    console.log("Message sent: %s", info.messageId);
}
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.js.map