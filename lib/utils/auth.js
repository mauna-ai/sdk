"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeJWT = exports.createExchangeToken = exports.decode = exports.encode = void 0;
var crypto_1 = require("./crypto");
var date_1 = require("./date");
function encode(payload, key) {
    var payloadJSON = JSON.stringify(payload);
    var encrypted = crypto_1.encrypt(payloadJSON, key);
    return encrypted;
}
exports.encode = encode;
function decode(enc_token, key) {
    var jwt = crypto_1.decrypt(enc_token, key);
    return jwt;
}
exports.decode = decode;
function createExchangeToken(apiKey) {
    var timestamp = date_1.now();
    var nonce = crypto_1.generateNonce();
    var payload = { timestamp: timestamp, nonce: nonce };
    var key = crypto_1.generateEncryptionKey(apiKey, nonce);
    var exchangeToken = encode(payload, key);
    return [exchangeToken, nonce];
}
exports.createExchangeToken = createExchangeToken;
function decodeJWT(response, apiKey, nonce) {
    var key = crypto_1.generateEncryptionKey(apiKey, nonce);
    var enc_token = response.enc_token;
    return decode(enc_token, key);
}
exports.decodeJWT = decodeJWT;
//# sourceMappingURL=auth.js.map