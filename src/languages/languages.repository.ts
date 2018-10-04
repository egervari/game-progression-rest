import { database } from '../database';

export const languagesRepository = {
  getAllLanguages: async () => database('languages').select('*'),
};
