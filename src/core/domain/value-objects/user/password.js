import { Left, Right } from "@/utils";

/** @typedef {import("@/utils/index").EitherLeftOrRight} EitherLeftOrRight */

export class Password {
  /** @type {string} */
  #_password;

  constructor(password) {
    this.#_password = password;
  }

  /**
   * @param {{ password: string }}
   * @returns {EitherLeftOrRight}
   */
  static create({ password }) {
    if (!Password.#doesPasswordIsAtLeastEightCharactersLong({ password }))
      return new Left("Password must be at least 8 characters long.");
    return new Right(new Password(password).value);
  }

  /**
   * @param {{ password: string }} password
   * @returns {boolean}
   */
  static #doesPasswordIsAtLeastEightCharactersLong({ password }) {
    return password.length >= 8;
  }

  /**
   * @returns {string}
   */
  get value() {
    return this.#_password;
  }
}
