import { Context } from 'koa';

export const profileController = {
  getProfile: async (context: Context) => {
    context.body = 'get profile';
  },

  updateProfile: async (context: Context) => {
    context.body = 'update profile';
  },
};