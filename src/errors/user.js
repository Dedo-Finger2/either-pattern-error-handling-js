export class InvalidUserDataError extends Error {
  /** @param {string} message */
  constructor(message = "Invalid User Data.") {
    super(message);
    this.message = message;
    this.name = this.constructor.name;
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, this.constructor);
  }
}

export class InvalidEmailError extends Error {
  /** @param {string} message */
  constructor(message = "ERROR: Invalid email format.") {
    super(message);
    this.message = message;
    this.name = this.constructor.name;
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, this.constructor);
  }
}

export class ShortPasswordLengthError extends Error {
  /** @param {string} message */
  constructor(
    message = "ERROR: Password is too short. Must be at least 8 characters long.",
  ) {
    super(message);
    this.message = message;
    this.name = this.constructor.name;
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, this.constructor);
  }
}

export class ShortUserNameLengthError extends Error {
  /** @param {string} message */
  constructor(
    message = "ERROR: Name is too short. Must be at least 3 characters long.",
  ) {
    super(message);
    this.message = message;
    this.name = this.constructor.name;
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, this.constructor);
  }
}
