/** @template T */
export class Right {
  /** @type {T} */
  #_value;

  constructor(value) {
    this.#_value = value;
  }

  /** @returns {boolean} */
  isLeft() {
    return false;
  }

  /** @returns {boolean} */
  isRight() {
    return true;
  }

  /** @returns {T} */
  get value() {
    return this.#_value;
  }
}
