"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEncryptionKey = exports.generateNonce = exports.decrypt = exports.encrypt = void 0;
var assert_1 = __importDefault(require("assert"));
var crypto_1 = __importDefault(require("crypto"));
var xor_1 = __importDefault(require("bitwise/buffer/xor"));
var config_1 = require("../config");
function encrypt(text, password) {
    var keyBuf = Buffer.from(password, "hex");
    var cipher = crypto_1.default.createCipheriv(config_1.cipherMode, keyBuf, config_1.defaultIv);
    var encrypted = cipher.update(text, "utf8", "hex");
    var _final = encrypted + cipher.final("hex");
    return _final;
}
exports.encrypt = encrypt;
function decrypt(encrypted, password) {
    var keyBuf = Buffer.from(password, "hex");
    var decipher = crypto_1.default.createDecipheriv(config_1.cipherMode, keyBuf, config_1.defaultIv);
    var decrypted = decipher.update(encrypted, "hex", "utf8");
    var final = decrypted + decipher.final("utf8");
    return final;
}
exports.decrypt = decrypt;
var generateNonce = function (length) {
    if (length === void 0) { length = 12; }
    return crypto_1.default.randomBytes(Math.round(length / 2))
        .toString("hex")
        .substring(0, length);
};
exports.generateNonce = generateNonce;
/*
 * The key generating function. The algorithm is the following:
 * Given a key and a nonce, both get converted to Buffer objects,
 * then xor operation is performed on these buffers, the result is encrypted
 * as hex and returned from the function.
 *
 * @param apiKey Developer"s API key
 * @param nonce Random string as nonce value
 * @return new key as a string
 * */
function generateEncryptionKey(apiKey, nonce) {
    var apiKeyByteLen = Buffer.byteLength(apiKey);
    assert_1.default(apiKeyByteLen === config_1.encryptionKeyLenBytes, "API key should be " + config_1.encryptionKeyLenBytes + " bytes in length");
    var nonceBuf = Buffer.from(nonce, "base64");
    var apiKeyBuf = Buffer.from(apiKey, "hex");
    var isLooping = true;
    var keyBuf = xor_1.default(nonceBuf, apiKeyBuf, isLooping);
    var key = keyBuf.toString("hex");
    return key;
}
exports.generateEncryptionKey = generateEncryptionKey;
//# sourceMappingURL=crypto.js.map