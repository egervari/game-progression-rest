import { Context } from 'koa';

import { gamesRepository } from './games.repository';

export const gamesController = {
  getAllGames: async (context: Context) => {
    try {
      context.body = await gamesRepository.getAllGames();
    } catch (error) {
      console.log(error);
    }
  },

  getGame: async (context: Context) => {
    context.body = 'get game';
  },

  updateGame: async (context: Context) => {
    context.body = 'update game';
  },

  deleteGame: async (context: Context) => {
    context.body = 'delete game';
  },
};
