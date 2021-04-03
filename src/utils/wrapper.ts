// src/utils/wrapper.ts

import polly from "polly-js";
import type { SdkFunctionWrapper } from "../generated/sdk";

export const withRetries: SdkFunctionWrapper = <T>(action: () => Promise<T>) =>
  polly()
    .handle((err: Error) => {
      console.warn("GraphqlClient:NetworkError", err);
      return err.message.includes("connect ETIMEDOUT");
    })
    .waitAndRetry(3)
    .executeForPromise((info) => {
      if (info.count === 3) {
        console.error("GraphqlClient:MaxRetries", null, {
          ...info,
          action: action.toString(),
        });
      } else if (info.count > 0) {
        console.warn("GraphqlClient:RetryingCall", null, {
          ...info,
          action: action.toString(),
        });
      }

      return action();
    });
