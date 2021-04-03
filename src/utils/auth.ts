// src/utils/auth.ts

import isomorphicFetch from "isomorphic-fetch";
isomorphicFetch;

import { authEndpoint } from "../config";
import {
  decrypt,
  encrypt,
  generateNonce,
  generateEncryptionKey,
} from "./crypto";
import { now } from "./date";

import type { encryptedString, encryptionKey } from "./crypto";

export type authRequestData = {
  developer_id: number;
  token_payload: encryptedString;
};

export type tokenPayload = {
  timestamp: number;
  nonce: string;
};

export type authResponseData = {
  enc_token: encryptedString;
};

export type JWT = string;

export function encode(
  payload: tokenPayload,
  key: encryptionKey
): encryptedString {
  const payloadJSON = JSON.stringify(payload);
  const encrypted: encryptedString = encrypt(payloadJSON, key);

  return encrypted;
}

export function decode(enc_token: encryptedString, key: encryptionKey): JWT {
  const jwt: JWT = decrypt(enc_token, key);

  return jwt;
}

export function createExchangeToken(apiKey: string): [encryptedString, string] {
  const timestamp = now();
  const nonce = generateNonce();
  const payload: tokenPayload = { timestamp, nonce };

  const exchangeToken = encode(payload, apiKey);

  return [exchangeToken, nonce];
}

export function decodeJWT(
  response: authResponseData,
  apiKey: string,
  nonce: string
): JWT {
  const key = generateEncryptionKey(apiKey, nonce);
  const { enc_token } = response;

  return decode(enc_token, key);
}

export async function requestJWT(
  developer_id: number,
  token_payload: encryptedString
): Promise<authResponseData> {
  const data: authRequestData = { developer_id, token_payload };
  const body: string = JSON.stringify(data);
  const headers = { "Content-Type": "application/json" };

  const response = await fetch(authEndpoint, {
    method: "POST",
    body,
    headers,
  });

  const authData: authResponseData = await response.json();

  return authData;
}
