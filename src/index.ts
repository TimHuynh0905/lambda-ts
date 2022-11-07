import { APIGatewayProxyResult, APIGatewayEvent, Context } from "aws-lambda";
import {
  resolveStatusCode,
  resolveEmailAddress,
  resolvePhoneAddress,
  buildResponse,
} from "./utils";
import { UserProfileInput, UserProfile } from "./types";

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const { firstName, lastName, emailAddress, phoneNumber }: UserProfileInput =
    JSON.parse(event.body || "{}");

  const statusCode: number = resolveStatusCode(firstName || "", lastName || "");
  const resolvedEmail: string = resolveEmailAddress(emailAddress || "");
  const resolvedPhone: string = resolvePhoneAddress(phoneNumber || "");

  const profile: UserProfile = {
    fullName: `${firstName} ${lastName}`,
    emailAddress: resolvedEmail,
    phoneNumber: resolvedPhone,
  };

  return buildResponse(profile, statusCode);
};
