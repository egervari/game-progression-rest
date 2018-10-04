import * as Router from 'koa-router';

import { profileController } from './profile.controller';

export const profileRoutes = new Router()
  .get('/', profileController.getProfile)
  .put('/', profileController.updateProfile);
