/// <reference path="../../typings/main.d.ts" />

import { appConfig } from './index.config';
import { routerConfig } from './index.route';

import { registerAdmin } from '../app/admin/index';
import { registerComponents } from '../app/components_old/index';
import { registerDataServices } from '../app/data/index';
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
    .config(routerConfig);

  registerAdmin();
  registerComponents();
  registerDataServices();
  registerProfile();
  registerSplash();

}
