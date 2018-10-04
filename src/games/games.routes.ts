import * as Router from 'koa-router';

import { gamesController } from './games.controller';

export const gamesRoutes = new Router()
  .get('/', gamesController.getAllGames)
  .get('/:id', gamesController.getGame)
  .put('/:id', gamesController.updateGame)
  .delete('/:id', gamesController.deleteGame);
