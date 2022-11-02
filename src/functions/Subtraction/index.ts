import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";
import { buildResponse } from "../../utils/helper";

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const { a, b } = JSON.parse(event.body || "{}");
  return buildResponse(a - b);
};
