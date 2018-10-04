import * as Router from 'koa-router';

import { gamesRoutes } from './games/games.routes';
import { languagesRoutes } from './languages/languages.routes';
import { platformsRoutes } from './platforms/platforms.routes';
import { profileRoutes } from './profile/profile.routes';

export const router = new Router({ prefix: '/api/v1' })
  .use('/games', gamesRoutes.routes())
  .use('/languages', languagesRoutes.routes())
  .use('/platforms', platformsRoutes.routes())
  .use('/profile', profileRoutes.routes());
