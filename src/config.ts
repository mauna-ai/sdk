import crypto from "crypto";

export const cipherMode = "aes-256-cbc";
export const ivLength = 16;
export const defaultIv = crypto.randomBytes(ivLength);
export const encryptionKeyLenBytes = 64;

export default {
  cipherMode,
  ivLength,
  encryptionKeyLenBytes,
  defaultIv
};
