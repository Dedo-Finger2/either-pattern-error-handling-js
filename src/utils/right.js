export class Right {
  #_value;

  constructor(value) {
    this.#_value = value;
  }

  isLeft() {
    return false;
  }

  isRight() {
    return true;
  }

  get value() {
    return this.#_value;
  }
}
