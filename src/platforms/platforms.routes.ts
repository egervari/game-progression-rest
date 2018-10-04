import * as Router from 'koa-router';

import { platformsController } from './platforms.controller';

export const platformsRoutes = new Router().get('/', platformsController.getAllPlatforms);
