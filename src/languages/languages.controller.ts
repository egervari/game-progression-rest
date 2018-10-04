import { Context } from 'koa';

import { languagesRepository } from './languages.repository';

export const languagesController = {
  getAllLanguages: async (context: Context) => {
    try {
      context.body = await languagesRepository.getAllLanguages();
    } catch (error) {
      console.log(error);
    }
  },
};
