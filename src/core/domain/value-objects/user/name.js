export class Name {
  /** @type {string} */
  #_name;

  constructor(name) {
    this.#_name = name;
  }

  #doesNameHasAtLeastThreeCharacters() {
    return this.#_name.length >= 3;
  }

  validate() {
    if (!this.#doesNameHasAtLeastThreeCharacters())
      throw new Error("Name must have at least 3 characters.");
    return this.#_name;
  }
}
