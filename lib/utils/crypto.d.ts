export declare type encryptionKey = string;
export declare type encryptedString = string;
export declare function encrypt(text: string, password: string): string;
export declare function decrypt(encrypted: string, password: string): string;
export declare const generateNonce: (length?: number) => string;
export declare function generateEncryptionKey(apiKey: string, nonce: string): encryptionKey;
//# sourceMappingURL=crypto.d.ts.map