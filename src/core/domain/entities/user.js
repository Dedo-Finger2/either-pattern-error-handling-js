/* eslint-disable no-unused-vars */
import { Left, Right } from "../../../utils";
import { Email } from "../value-objects/user/email";
import { Name } from "../value-objects/user/name";
import { Password } from "../value-objects/user/password";

/** @typedef {({ name: Name, email: Email, password: Password })} UserDto  */

export class User {
  name;
  email;
  password;
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
   * @param {userDto} userDto
   * @returns {Left|Right}
   */
  static build(userDto) {
    const hasInvalidData = Object.values(userDto).some((value) =>
      value.isLeft(),
    );
    if (hasInvalidData) {
      return new Left("Invalid user data.");
    }
    return new Right(new User(userDto));
  }
}
