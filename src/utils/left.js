export class Left {
  #_value;

  constructor(value) {
    this.#_value = value;
  }

  isLeft() {
    return true;
  }

  isRight() {
    return false;
  }

  get value() {
    return this.#_value;
  }
}
