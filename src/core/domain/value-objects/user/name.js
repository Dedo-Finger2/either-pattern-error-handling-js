import { Left, Right } from "./../../../../utils";

/** @typedef {Left|Right} EitherLeftOrRight */

export class Name {
  /** @type {string} */
  #_name;

  constructor(name) {
    this.#_name = name;
  }

  /**
   * @param {string} name
   * @returns {EitherLeftOrRight}
   */
  static create({ name }) {
    if (!Name.#doesNameHasAtLeastThreeCharacters({ name }))
      return new Left("Name must have at least 3 characters.");
    return new Right(new Name(name).value);
  }

  /**
   * @param {string} name
   * @returns {boolean}
   */
  static #doesNameHasAtLeastThreeCharacters({ name }) {
    return name.length >= 3;
  }

  get value() {
    return this.#_name;
  }
}
