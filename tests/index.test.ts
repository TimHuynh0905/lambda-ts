import { UserProfileInput } from "../src/types";
import * as helpers from "../src/utils/helpers";

const resolveStatusCodeMock = jest.spyOn(helpers, "resolveStatusCode");
const resolveEmailAddressMock = jest.spyOn(helpers, "resolveEmailAddress");
const resolvePhoneAddressMock = jest.spyOn(helpers, "resolvePhoneAddress");
const buildResponseMock = jest.spyOn(helpers, "buildResponse");

import { resolver } from "../src/index";

describe("src/index.ts", () => {
  const rawProfile: UserProfileInput = {
    firstName: "first",
    lastName: "last",
    emailAddress: "user@email.com",
    phoneNumber: "2134567890",
  };

  beforeEach(() => {
    resolver(rawProfile);
  });

  test("resolver() calls resolveStatusCode()", () => {
    expect(resolveStatusCodeMock).toHaveBeenCalledWith("first", "last");
    expect(resolveStatusCodeMock).toHaveBeenCalledTimes(1);
  });

  test("resolver() calls resolveEmailAddress()", () => {
    expect(resolveEmailAddressMock).toHaveBeenCalledWith("user@email.com");
    expect(resolveEmailAddressMock).toHaveBeenCalledTimes(1);
  });

  test("resolver() calls resolvePhoneAddress()", () => {
    expect(resolvePhoneAddressMock).toHaveBeenCalledWith("2134567890");
    expect(resolvePhoneAddressMock).toHaveBeenCalledTimes(1);
  });

  test("resolver() calls buildResponse()", () => {
    expect(buildResponseMock).toHaveBeenCalledTimes(1);
  });
});
