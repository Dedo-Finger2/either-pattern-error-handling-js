import { Left, Right } from "../../../../utils";

/** @typedef {Left|Right} EitherLeftOrRight */

export class Password {
  /** @type {string} */
  #_password;

  constructor(password) {
    this.#_password = password;
  }

  /**
   * @param {string} password
   * @returns {EitherLeftOrRight}
   */
  static create({ password }) {
    if (!Password.#doesPasswordIsAtLeastEightCharactersLong({ password }))
      return new Left("Password must be at least 8 characters long.");
    return new Right(new Password(password).value);
  }

  /**
   * @param {string} password
   * @returns {boolean}
   */
  static #doesPasswordIsAtLeastEightCharactersLong({ password }) {
    return password.length >= 8;
  }

  get value() {
    return this.#_password;
  }
}
