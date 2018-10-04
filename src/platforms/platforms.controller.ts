import { Context } from 'koa';

import { platformsRepository } from './platforms.repository';

export const platformsController = {
  getAllPlatforms: async (context: Context) => {
    try {
      context.body = await platformsRepository.getAllPlatforms();
    } catch (error) {
      context.status = 500;
    }
  },
};
