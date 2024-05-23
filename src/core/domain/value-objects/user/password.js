export class Password {
  /** @type {string} */
  #_password;

  constructor(password) {
    this.#_password = password;
  }

  #doesPasswordIsAtLeastEightCharactersLong() {
    return this.#_password.length >= 8;
  }

  validate() {
    if (!this.#doesPasswordIsAtLeastEightCharactersLong())
      throw new Error("Password must be at least 8 characters long.");
    return this.#_password;
  }
}
