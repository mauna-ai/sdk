import crypto from "crypto";

export const cipherMode = "aes-256-cbc";
export const ivLength = 16;
export const defaultIv = crypto.randomBytes(ivLength);
export const encryptionKeyLenBytes = 64;
export const apiEndpoint = "https://api.mauna.cloud/v1/graphql";
export const authEndpoint = "https://sdk.auth.mauna.cloud";

export default {
  apiEndpoint,
  authEndpoint,
  cipherMode,
  defaultIv,
  ivLength,
  encryptionKeyLenBytes,
};
