"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionKeyLenBytes = exports.defaultIv = exports.ivLength = exports.cipherMode = void 0;
var crypto_1 = __importDefault(require("crypto"));
exports.cipherMode = "aes-256-cbc";
exports.ivLength = 16;
exports.defaultIv = crypto_1.default.randomBytes(exports.ivLength);
exports.encryptionKeyLenBytes = 64;
exports.default = {
    cipherMode: exports.cipherMode,
    ivLength: exports.ivLength,
    encryptionKeyLenBytes: exports.encryptionKeyLenBytes,
    defaultIv: exports.defaultIv
};
//# sourceMappingURL=config.js.map