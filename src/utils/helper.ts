import { APIGatewayProxyResult } from "aws-lambda";

export const buildResponse = (message: string): APIGatewayProxyResult => ({
  statusCode: 200,
  body: JSON.stringify({
    message: message,
  }),
});
