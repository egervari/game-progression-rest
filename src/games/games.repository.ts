import { database } from '../database';

export const gamesRepository = {
  getAllGames: async () => database('games').select('*'),
};
