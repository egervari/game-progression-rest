import { Context } from 'koa';

import { profileRepository } from './profile.repository';

export const profileController = {
  getProfile: async (context: Context) => {
    try {
      context.body = await profileRepository.getProfile();
    } catch (error) {
      console.log(error);
    }
  },

  updateProfile: async (context: Context) => {
    context.body = 'update profile';
  },
};
