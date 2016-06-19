/// <reference path="../../typings/main.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { adminRouterConfig } from './admin/admin.route';
import { runBlock } from './index.run';
import { LoginController } from './login/login.controller';
import { AdminCompositionsController } from './admin/admin-compositions.controller';
import { registerComponents } from '../app/components/index';
import { registerDataServices } from '../app/data/index';
import { registerProfile } from '../app/profile/index';
import { registerComposition } from '../app/composition/index';
import { registerComposer } from '../app/composer/index';
import { registerHome } from '../app/home/index';

declare var moment: moment.MomentStatic;
declare var firebase: any;

module lilybook {
  'use strict';

  angular.module('lilybook', [
    'ngAnimate',
    'ui.router',
    'ngMaterial',
    'slickCarousel',
    'firebase'
  ]).constant('moment', moment)
    .constant('firebase', firebase)
    .config(config)
    .config(routerConfig)
    .config(adminRouterConfig)
    .run(runBlock)
    .controller('LoginController', LoginController)
    .controller('AdminCompositionsController', AdminCompositionsController);

  registerComponents();
  registerDataServices();
  registerProfile();
  registerComposition();
  registerComposer();
  registerHome();
}
