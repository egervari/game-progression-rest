import { database } from '../database';

export const profileRepository = {
  getProfile: async () =>
    database('profiles')
      .select('*')
      .where('id', 1),
};
