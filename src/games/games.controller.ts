import { Context } from 'koa';

import { gamesRepository } from './games.repository';

export const gamesController = {
  getAllGames: async (context: Context) => {
    try {
      context.body = await gamesRepository.getAllGames(
        context.query.platformId ? Number(context.query.platformId) : null,
        context.query.isComplete ? /true/i.test(context.query.isComplete) : null,
        context.query.name_like,
        context.query._sort,
        context.query._order,
      );
    } catch (error) {
      context.status = 500;
    }
  },

  getGame: async (context: Context) => {
    try {
      context.body = await gamesRepository.getGame(context.params.id);
    } catch (error) {
      context.status = 500;
    }
  },

  createGame: async (context: Context) => {
    try {
      console.log((context.request as any).body);

      context.body = await gamesRepository
        .createGame((context.request as any).body)
        .then(() => gamesRepository.getGame(context.params.id));
    } catch (error) {
      console.log(error);
      context.status = 500;
    }
  },

  updateGame: async (context: Context) => {
    try {
      context.body = await gamesRepository
        .updateGame(context.params.id, (context.request as any).body)
        .then(() => gamesRepository.getGame(context.params.id));
    } catch (error) {
      context.status = 500;
    }
  },

  deleteGame: async (context: Context) => {
    try {
      context.body = await gamesRepository.deleteGame(context.params.id);
    } catch (error) {
      context.status = 500;
    }
  },
};
