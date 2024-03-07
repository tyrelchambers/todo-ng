import { Handler } from '@netlify/functions';
import { prisma } from '../../../src/utils';

export const handler: Handler = async (event, context) => {
  const { title } = event.queryStringParameters || {};

  if (!title) {
    return {
      statusCode: 400,
      body: 'Title is required',
    };
  }

  await prisma.todo.create({
    data: {
      todo: title,
      createdAt: new Date(),
    },
  });

  return {
    statusCode: 200,
  };
};
