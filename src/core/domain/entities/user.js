import { Email } from "../value-objects/user/email";
import { Name } from "../value-objects/user/name";
import { Password } from "../value-objects/user/password";

/** @typedef {({ name: string, email: string, password: string })} UserDto  */

export class User {
  name;
  email;
  password;
  createdAt;

  /**
   * @param {UserDto} userDto - DTO containing user data
   */
  constructor(userDto) {
    this.name = new Name(userDto.name).validate();
    this.email = new Email(userDto.email).validate();
    this.password = new Password(userDto.password).validate();
    this.createdAt = new Date();
  }
}
