import { describe, it, expect } from "vitest";
import { User } from "@/core/domain/entities/user.js";
import { Name } from "@/core/domain/value-objects/user/name.js";
import { Email } from "@/core/domain/value-objects/user/email.js";
import { Password } from "@/core/domain/value-objects/user/password.js";

/** @typedef {import("@/core/domain/entities/user.js").UserDto} UserDto */

describe("User Entity Class", () => {
  it("should create a new user when valid data is passed", () => {
    /** @type {UserDto} */
    const userDto = {
      name: Name.create({ name: "fake_valid_name" }),
      email: Email.create({ email: "fakevalid@email.com" }),
      password: Password.create({ password: "fake_valid_password" }),
    };
    const sutOrError = User.build(userDto);

    expect(userDto.email.isRight()).toBe(true);
    expect(userDto.name.isRight()).toBe(true);
    expect(userDto.password.isRight()).toBe(true);
    expect(sutOrError.value).toBeInstanceOf(User);
    expect(sutOrError.value.name).toBe(userDto.name.value);
    expect(sutOrError.value.email).toBe(userDto.email.value);
    expect(sutOrError.value.password).toBe(userDto.password.value);
  });

  it("should throw when creating a new user with invalid name", () => {
    /** @type {UserDto} */
    const userDto = {
      name: Name.create({ name: "a" }),
      email: Email.create({ email: "fakevalid@email.com" }),
      password: Password.create({ password: "fake_valid_password" }),
    };
    const sutOrError = User.build(userDto);

    expect(sutOrError.isLeft()).toBe(true);
    expect(userDto.name.isLeft()).toBe(true);
    expect(userDto.name.value.message).toBe(
      "ERROR: Name is too short. Must be at least 3 characters long.",
    );
  });

  it("should throw when creating a new user with invalid email", () => {
    /** @type {UserDto} */
    const userDto = {
      name: Name.create({ name: "fake_valid_name" }),
      email: Email.create({ email: "fakevalidemail.com" }),
      password: Password.create({ password: "fake_valid_password" }),
    };
    const sutOrError = User.build(userDto);

    expect(sutOrError.isLeft()).toBe(true);
    expect(userDto.email.isLeft()).toBe(true);
    expect(userDto.email.value.message).toBe("ERROR: Invalid email format.");
  });

  it("should throw when creating a new user with invalid password", () => {
    /** @type {UserDto} */
    const userDto = {
      name: Name.create({ name: "fake_valid_name" }),
      email: Email.create({ email: "fakevalid@email.com" }),
      password: Password.create({ password: "123" }),
    };
    const sutOrError = User.build(userDto);

    expect(sutOrError.isLeft()).toBe(true);
    expect(userDto.password.isLeft()).toBe(true);
    expect(userDto.password.value.message).toBe(
      "ERROR: Password is too short. Must be at least 8 characters long.",
    );
  });
});
