// src/utils/ensureEnv.ts

export const ensureEnv = (key: string, exitCode = -1): void => {
  const val: any = process.env[key];

  // Value exists, continue
  if (val) return;

  // Nope, raise / quit
  const msg = `"${key}" environment variable is required`;

  // Haz exit code? Quit
  if (exitCode !== -1) {
    console.error(msg);
    process.exit(exitCode);

  // Else throw
  } else {
    throw new Error(msg);
  }

  return;
};
