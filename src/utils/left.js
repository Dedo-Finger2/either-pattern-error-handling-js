/** @template T */
export class Left {
  /** @type {T} */
  #_value;

  constructor(value) {
    this.#_value = value;
  }

  /** @returns {boolean} */
  isLeft() {
    return true;
  }

  /** @returns {boolean} */
  isRight() {
    return false;
  }

  /** @returns {T} */
  get value() {
    return this.#_value;
  }
}
