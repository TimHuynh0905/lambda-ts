const regexTestMock = jest.spyOn(RegExp.prototype, "test");

import { emailValidator, phoneValidator } from "../../src/utils/validators";

describe("src/utils/validators.ts", () => {
  test("emailValidator() calls Regex.test()", () => {
    emailValidator("username@email.com");
    expect(regexTestMock).toHaveBeenCalledTimes(1);
  });
  test("phoneValidator() calls Regex.test()", () => {
    phoneValidator("213 456 9894");
    expect(regexTestMock).toHaveBeenCalledTimes(1);
  });
});
