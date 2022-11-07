const jsonStringifyMock = jest.spyOn(JSON, "stringify");

import * as validators from "../../src/utils/validators";
const emailValidatorMock = jest.spyOn(validators, "emailValidator");
const phoneValidatorMock = jest.spyOn(validators, "phoneValidator");

import {
  resolveStatusCode,
  resolveEmailAddress,
  resolvePhoneAddress,
  buildResponse,
} from "../../src/utils/helpers";

describe("src/utils/helper.ts", () => {
  test("resolveStatusCode() returns either 200 or 400", () => {
    expect(resolveStatusCode("", "a")).toBe(400);
    expect(resolveStatusCode("a", "")).toBe(400);
    expect(resolveStatusCode("", "")).toBe(400);
    expect(resolveStatusCode("a", "b")).toBe(200);
  });

  test("resolveEmailAddress() calls emailValidator()", () => {
    expect(resolveEmailAddress("abc@def.com")).toBe("abc@def.com");
    expect(resolveEmailAddress("abc")).toBe("Invalid Input");
    expect(emailValidatorMock).toHaveBeenCalledTimes(2);
  });

  test("resolvePhoneAddress() calls phoneValidator()", () => {
    expect(resolvePhoneAddress("2134567890")).toBe("2134567890");
    expect(resolvePhoneAddress("d123a21033")).toBe("Invalid Input");
    expect(phoneValidatorMock).toHaveBeenCalledTimes(2);
  });

  test("buildResponse() calls JSON.stringify()", () => {
    const _ = buildResponse({}, 200);
    expect(jsonStringifyMock).toHaveBeenCalledTimes(1);
    expect(jsonStringifyMock).toHaveBeenCalledWith({
      data: {},
    });
  });
});
