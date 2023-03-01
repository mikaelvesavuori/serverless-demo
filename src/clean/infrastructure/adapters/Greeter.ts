import { APIGatewayProxyEventV2 } from 'aws-lambda';

import { getGreetDTO } from '../../application/getGreetDTO';
import { greet } from '../../usecases/greet';

/**
 * @description The AWS Lambda event handler.
 */
export const handler = async (event: APIGatewayProxyEventV2) => {
  try {
    const input = getGreetDTO(event);
    const result = await greet(input);

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message || '')
    };
  }
};
