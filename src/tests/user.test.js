import { describe, it, expect } from "vitest";
import { User } from "./../core/domain/entities/user.js";

/** @typedef {({ name: string, email: string, password: string })} UserDto  */

describe("User Entity Class", () => {
  it("should create a new user when valid data is passed", () => {
    /** @type {UserDto} */
    const userDto = {
      name: "fake_name",
      email: "valid_fake@email.com",
      password: "fake_valid_password",
    };

    const sut = new User(userDto);

    expect(sut).toBeInstanceOf(User);
    expect(sut.name).toBe(userDto.name);
    expect(sut.email).toBe(userDto.email);
    expect(sut.password).toBe(userDto.password);
  });

  it("should throw when creating a new user with invalid name", () => {
    /** @type {UserDto} */
    const userDto = {
      name: "a",
      email: "valid_fake@email.com",
      password: "fake_valid_password",
    };

    const sut = () => new User(userDto);

    expect(sut).toThrow();
  });
});
