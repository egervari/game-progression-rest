import { Context } from 'koa';

import { profileRepository } from './profile.repository';

export const profileController = {
  getProfile: async (context: Context) => {
    try {
      context.body = await profileRepository.getProfile();
    } catch (error) {
      context.status = 500;
    }
  },

  updateProfile: async (context: Context) => {
    try {
      context.body = await profileRepository
        .updateProfile((context.request as any).body)
        .then(() => profileRepository.getProfile());
    } catch (error) {
      context.status = 500;
    }
  },
};
