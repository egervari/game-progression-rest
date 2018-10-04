import * as Koa from 'koa';

import { router } from './router';

new Koa().use(router.routes()).listen(3000);

console.log('Server running on port 3000');
