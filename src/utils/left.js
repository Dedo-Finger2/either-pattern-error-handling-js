export class Left {
  #_value;

  constructor(value) {
    this.#_value = value;
  }

  get value() {
    return this.#_value;
  }
}
