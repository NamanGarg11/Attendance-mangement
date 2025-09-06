export type ApiErrorType = {
  statusCode: number;
  message: string;
  error?:
    | {
        message: string;
        name: string;
        stack?: string;
      }
    | null
    | unknown;
  stack: string; // required, not optional
};

export default class ApiError extends Error implements ApiErrorType {
  public statusCode: number;
  public error?: ApiErrorType["error"] | unknown;
  public stack: string;

  constructor(
    statusCode: number,
    message: string,
    error?: ApiErrorType["error"] | unknown,
    stack?: string
  ) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;

    if (error instanceof Error) {
      this.error = {
        message: error.message,
        name: error.name,
        stack: error.stack,
      };
    } else {
      this.error = null;
    }

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
      this.stack = super.stack ?? ""; // ensure non-undefined
    }
  }
}
