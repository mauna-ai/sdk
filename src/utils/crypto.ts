// src/utils/crypto.ts

import assert from "assert";
import crypto from "crypto";

import xor from "bitwise/buffer/xor";

import {
  cipherMode,
  defaultIv,
  encryptionKeyLenBytes,
  ivLength,
} from "../config";

export type encryptionKey = string;
export type encryptedString = string;

export function encrypt(text: string, password: string): string {
  const keyBuf = Buffer.from(password, "hex");
  const cipher = crypto.createCipheriv(cipherMode, keyBuf, defaultIv);

  const encrypted = cipher.update(text, "utf8", "hex");
  const _final = encrypted + cipher.final("hex");

  return _final;
}

export function decrypt(encrypted: string, password: string): string {
  const keyBuf = Buffer.from(password, "hex");
  const decipher = crypto.createDecipheriv(cipherMode, keyBuf, defaultIv);

  const decrypted = decipher.update(encrypted, "hex", "utf8");
  const final = decrypted + decipher.final("utf8");

  return final;
}

export const generateNonce = (length = 12): string =>
  crypto
    .randomBytes(Math.round(length / 2))
    .toString("hex")
    .substring(0, length);

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
export function generateEncryptionKey(
  apiKey: string,
  nonce: string
): encryptionKey {
  const apiKeyByteLen = Buffer.byteLength(apiKey);
  assert(
    apiKeyByteLen === encryptionKeyLenBytes,
    `API key should be ${encryptionKeyLenBytes} bytes in length`
  );

  const nonceBuf = Buffer.from(nonce, "base64");
  const apiKeyBuf = Buffer.from(apiKey, "hex");
  const isLooping = true;

  const keyBuf = xor(nonceBuf, apiKeyBuf, isLooping);
  const key: encryptionKey = keyBuf.toString("hex");

  return key;
}
