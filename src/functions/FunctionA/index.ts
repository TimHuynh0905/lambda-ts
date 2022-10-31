import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";
import { buildResponse } from "../../utils/helper";

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return buildResponse("Function A");
};
