import { database } from '../database';

export const gamesRepository = {
  getAllGames: async (
    platformId: number,
    isComplete: boolean,
    name: string,
    sort: string = 'priority',
    order: string,
  ) =>
    database('games')
      .select('*')
      .modify(queryBuilder => {
        if (platformId) {
          queryBuilder.where('platformId', platformId);
        }

        if (isComplete !== null) {
          queryBuilder.where('isComplete', isComplete);
        }

        if (name) {
          queryBuilder.whereRaw(`lower(name) like '%${name}%'`);
        }
      })
      .orderBy(sort, order),

  getGame: async (id: number) =>
    database('games')
      .select('*')
      .where('id', id)
      .first(),

  createGame: async (game: any) => database('games').insert(game),

  updateGame: async (gameId: number, game: any) =>
    database('games')
      .update(game)
      .where('id', gameId),

  deleteGame: async (id: number) =>
    database('games')
      .delete()
      .where('id', id),
};
