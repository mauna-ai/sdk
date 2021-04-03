// src/utils/date.ts

export function now(): number {
  const date = new Date();
  const timestamp = date.getTime();
  return Math.round(timestamp / 1000);
}
