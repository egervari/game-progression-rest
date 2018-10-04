import * as Koa from 'koa';
import * as Router from 'koa-router';

import { gamesRoutes } from './games/games.routes';
import { languagesRoutes } from './languages/languages.routes';
import { platformsRoutes } from './platforms/platforms.routes';
import { profileRoutes } from './profile/profile.routes';

const router = new Router()
  .use('/games', gamesRoutes.routes())
  .use('/languages', languagesRoutes.routes())
  .use('/platforms', platformsRoutes.routes())
  .use('/profile', profileRoutes.routes());

new Koa()
  .use(router.routes())
  .listen(3000);

console.log('Server running on port 3000');