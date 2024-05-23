export class Email {
  /** @type {string} */
  #_email;

  constructor(email) {
    this.#_email = email;
  }

  #isEmailAValidEmail() {
    return this.#_email.match(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    );
  }

  validate() {
    if (!this.#isEmailAValidEmail()) throw new Error("Invalid email");
    return this.#_email;
  }
}
