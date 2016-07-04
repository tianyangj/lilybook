/// <reference path="../../typings/main.d.ts" />

import { registerComponents } from '../app/components_old/index';

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
    .constant('firebase', firebase);

  registerComponents();

}
