import { APIGatewayProxyResult } from "aws-lambda";
import { emailValidator, phoneValidator } from "./validators";
import { HandlerOutput } from "../types";

const ErrorMessage = "Invalid Input";

export const resolveStatusCode = (
  firstName: string,
  lastName: string
): number => (firstName && lastName ? 200 : 400);

export const resolveEmailAddress = (email: string): string =>
  emailValidator(email) ? email : ErrorMessage;

export const resolvePhoneAddress = (phone: string): string =>
  phoneValidator(phone) ? phone : ErrorMessage;

export const buildResponse = (
  output: HandlerOutput,
  statusCode: number
): APIGatewayProxyResult => {
  const body = JSON.stringify({ data: output });
  return { statusCode, body };
};
