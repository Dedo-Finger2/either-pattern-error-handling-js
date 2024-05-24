/* eslint-disable no-unused-vars */
import { Left, Right } from "@/utils";
import { Email } from "@/core/domain/value-objects/user/email.js";
import { Name } from "@/core/domain/value-objects/user/name.js";
import { Password } from "@/core/domain/value-objects/user/password.js";
import { InvalidUserDataError } from "@/errors/user";

/** @typedef {({ name: Name, email: Email, password: Password })} UserDto  */
/** @type {import("@/utils/index").EitherLeftOrRight} */
/** @type {import("@/utils/index").Either} */

export class User {
  /** @type {string} */
  name;
  /** @type {string} */
  email;
  /** @type {string} */
  password;
  /** @type {Date} */
  createdAt;

  /**
   * @param {UserDto} userDto - DTO containing user data
   */
  constructor(userDto) {
    this.name = userDto.name.value;
    this.email = userDto.email.value;
    this.password = userDto.password.value;
    this.createdAt = new Date();
  }

  /**
   * @param {UserDto} userDto
   * @returns {Either<Left<InvalidUserDataError>, Right<User>>}
   */
  static build(userDto) {
    const hasInvalidData = Object.values(userDto).some((value) =>
      value.isLeft(),
    );
    if (hasInvalidData) {
      return new Left(new InvalidUserDataError());
    }
    return new Right(new User(userDto));
  }
}
