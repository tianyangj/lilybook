/// <reference path="../../typings/main.d.ts" />

import { appConfig } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { registerAdmin } from '../app/admin/index';
import { registerComponents } from '../app/components/index';
import { registerComposer } from '../app/composer/index';
import { registerComposition } from '../app/composition/index';
import { registerDataServices } from '../app/data/index';
import { registerHome } from '../app/home/index';
import { registerModals } from '../app/modals/index';
import { registerProfile } from '../app/profile/index';
import { registerSplash } from '../app/splash/index';

declare var moment: moment.MomentStatic;
declare var firebase: any;

module lilybook {
  'use strict';

  angular.module('lilybook', [
    'firebase',
    'ngAnimate',
    'ngMaterial',
    'ui.router'
  ]).constant('moment', moment)
    .constant('firebase', firebase)
    .config(appConfig)
    .config(routerConfig)
    .run(runBlock);

  registerAdmin();
  registerComponents();
  registerComposer();
  registerComposition();
  registerDataServices();
  registerHome();
  registerModals();
  registerProfile();
  registerSplash();

}
