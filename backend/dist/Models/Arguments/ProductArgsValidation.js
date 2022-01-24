"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductArgsValidation = void 0;
class ProductArgsValidation {
    validate(model, title) {
        if (model.length < 3) {
            throw new Error("model is very short");
        }
    }
}
exports.ProductArgsValidation = ProductArgsValidation;
//# sourceMappingURL=ProductArgsValidation.js.map