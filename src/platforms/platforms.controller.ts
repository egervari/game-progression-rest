import { Context } from 'koa';

export const platformsController = {
  getAllPlatforms: async (context: Context) => {
    context.body = 'all platforms';
  },
};