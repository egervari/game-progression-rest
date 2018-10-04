import { database } from '../database';

const ProfileId = 1;

export const profileRepository = {
  getProfile: async () =>
    database('profiles')
      .select('*')
      .where('id', ProfileId)
      .first(),

  updateProfile: async (profile: any) =>
    database('profiles')
      .update(profile)
      .where('id', ProfileId),
};
