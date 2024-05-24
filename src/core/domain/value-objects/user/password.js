import { ShortPasswordLengthError } from "@/errors/user";
import { Left, Right } from "@/utils";

/** @type {import("@/utils/index").Either} */

export class Password {
  /** @type {string} */
  #_password;

  constructor(password) {
    this.#_password = password;
  }

  /**
   * @param {{ password: string }}
   * @returns {Either<Left<ShortPasswordLengthError>, Right<Password>>}
   */
  static create({ password }) {
    if (!Password.#doesPasswordIsAtLeastEightCharactersLong({ password }))
      return new Left(new ShortPasswordLengthError());
    return new Right(new Password(password));
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
