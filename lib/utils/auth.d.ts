import type { encryptedString, encryptionKey } from "./crypto";
declare type tokenPayload = {
    timestamp: number;
    nonce: string;
};
declare type authResponseData = {
    enc_token: encryptedString;
};
declare type JWT = string;
export declare function encode(payload: tokenPayload, key: encryptionKey): encryptedString;
export declare function decode(enc_token: encryptedString, key: encryptionKey): JWT;
export declare function createExchangeToken(apiKey: string): [encryptedString, string];
export declare function decodeJWT(response: authResponseData, apiKey: string, nonce: string): JWT;
export {};
//# sourceMappingURL=auth.d.ts.map