import * as Router from 'koa-router';

import { languagesController } from './languages.controller';

export const languagesRoutes = new Router()
  .get('/', languagesController.getAllLanguages);
