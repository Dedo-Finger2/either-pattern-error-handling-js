import { Left, Right } from "@/utils";

export class Email {
  /** @type {string} */
  #_email;

  constructor(email) {
    this.#_email = email;
  }

  /**
   * @param {{ email: string }}
   * @returns {import("@/utils/index").EitherLeftOrRight}
   */
  static create({ email }) {
    if (!Email.#isEmailAValidEmail({ email }))
      return new Left("Invalid Email.");
    return new Right(new Email(email).value);
  }

  /**
   * @param {{ email: string }}
   * @returns {boolean}
   */
  static #isEmailAValidEmail({ email }) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  /**
   * @returns {string}
   */
  get value() {
    return this.#_email;
  }
}
