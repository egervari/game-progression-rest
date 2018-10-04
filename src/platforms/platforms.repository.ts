import { database } from '../database';

export const platformsRepository = {
  getAllPlatforms: async () => database('platforms').select('*'),
};
