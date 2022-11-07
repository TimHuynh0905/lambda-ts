import { APIGatewayProxyResult, APIGatewayEvent, Context } from "aws-lambda";
import {
  resolveStatusCode,
  resolveEmailAddress,
  resolvePhoneAddress,
  buildResponse,
} from "./utils";
import { UserProfileInput, UserProfile } from "./types";

export const resolver = (
  rawProfile: UserProfileInput
): APIGatewayProxyResult => {
  const { firstName, lastName, emailAddress, phoneNumber }: UserProfileInput =
    rawProfile;

  const statusCode: number = resolveStatusCode(firstName, lastName);
  const resolvedEmail: string = resolveEmailAddress(emailAddress);
  const resolvedPhone: string = resolvePhoneAddress(phoneNumber);

  const profile: UserProfile = {
    fullName: `${firstName} ${lastName}`,
    emailAddress: resolvedEmail,
    phoneNumber: resolvedPhone,
  };

  return buildResponse(profile, statusCode);
};

/* istanbul ignore next */
export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return resolver(JSON.parse(event.body || "{}") as UserProfileInput);
};
