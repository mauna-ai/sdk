export function now(): number {
  const date = new Date();
  const timestamp = date.getTime();
  const offset = date.getTimezoneOffset();

  return timestamp - offset;
}
