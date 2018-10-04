import { Context } from 'koa';

export const gamesController = {
  getAllGames: async (context: Context) => {
    context.body = 'get games';
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

