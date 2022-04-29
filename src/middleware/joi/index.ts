import { errorHandler } from "./errorHandler.joi";
import { headersCheck } from "./headersCheck.joi";

export const joiMiddleware = {
  errorHandler,
  headersCheck,
};
