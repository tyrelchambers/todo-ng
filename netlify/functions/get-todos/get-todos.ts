import { Handler } from '@netlify/functions';
import { prisma } from '../../../src/utils';

export const handler: Handler = async (event, context) => {
  const todos = await prisma.todo.findMany();
  return {
    statusCode: 200,
    body: JSON.stringify(todos),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
  };
};
