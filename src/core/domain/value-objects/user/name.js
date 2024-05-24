import { Left, Right } from "@/utils";

/** @typedef {import("@/utils/index").EitherLeftOrRight} EitherLeftOrRight */

export class Name {
  /** @type {string} */
  #_name;

  constructor(name) {
    this.#_name = name;
  }

  /**
   * @param {{ name: string }}
   * @returns {EitherLeftOrRight}
   */
  static create({ name }) {
    if (!Name.#doesNameHasAtLeastThreeCharacters({ name }))
      return new Left("Name must have at least 3 characters.");
    return new Right(new Name(name).value);
  }

  /**
   * @param {{ name: string }}
   * @returns {boolean}
   */
  static #doesNameHasAtLeastThreeCharacters({ name }) {
    return name.length >= 3;
  }

  /**
   * @returns {string}
   */
  get value() {
    return this.#_name;
  }
}
