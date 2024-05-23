import { Left, Right } from "./../../../../utils";

/** @typedef {Left|Right} EitherLeftOrRight */

export class Email {
  /** @type {string} */
  #_email;

  constructor(email) {
    this.#_email = email;
  }

  /**
   * @returns {EitherLeftOrRight}
   */
  static create({ email }) {
    if (!Email.#isEmailAValidEmail({ email }))
      return new Left("Invalid Email.");
    return new Right(new Email(email).value);
  }

  static #isEmailAValidEmail({ email }) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  get value() {
    return this.#_email;
  }
}
