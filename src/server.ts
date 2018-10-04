// @ts-ignore
import cors = require('@koa/cors');
import * as Koa from 'koa';
import * as koaBody from 'koa-body';

import { router } from './router';

new Koa()
  .use(cors({ origin: '*' }))
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);

console.log('Server running on port 3000');
