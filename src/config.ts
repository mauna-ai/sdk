import crypto from "crypto";

export const cipherMode = "aes-256-cbc";
export const ivLength = 16;
// export const defaultIv = crypto.randomBytes(ivLength);
export const defaultIv = Buffer.alloc(16, 0);
export const encryptionKeyLenBytes = 64;
export const apiEndpoint = "https://api.mauna.cloud/v1/graphql";
export const authEndpoint = "https://us-central1-mauna-ai-290409.cloudfunctions.net/generateHasuraJWT";
// export const authEndpoint = "https://sdk.auth.mauna.cloud";

export default {
  apiEndpoint,
  authEndpoint,
  cipherMode,
  defaultIv,
  ivLength,
  encryptionKeyLenBytes,
};
