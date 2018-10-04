import { Context } from 'koa';

export const languagesController = {
  getAllLanguages: async (context: Context) => {
    context.body = 'get languages';
  },
};