import { APIGatewayProxyResult } from "aws-lambda";
import { LambdaOutput } from "../types";

export const buildResponse = (
  message: LambdaOutput
): APIGatewayProxyResult => ({
  statusCode: 200,
  body: JSON.stringify({
    message: message,
  }),
});
