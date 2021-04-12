export const cipherMode = "aes-256-cbc";
export const ivLength = 16;
export const defaultIv = Buffer.alloc(16, 0);
export const encryptionKeyLenBytes = 64;
export const apiEndpoint = "https://api.mauna.cloud/v1/graphql";
export const authEndpoint = "https://sdk.mauna.cloud/generateHasuraJWT";

export default {
  apiEndpoint,
  authEndpoint,
  cipherMode,
  defaultIv,
  ivLength,
  encryptionKeyLenBytes,
};
