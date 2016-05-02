/// <reference path="../../typings/main.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { LoginController } from './login/login.controller';
import { HomeController } from './home/home.controller';
import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';
import { registerComponents } from '../app/components/index';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module lilybook {
  'use strict';

  angular.module('lilybook', ['ngAnimate', 'ui.router', 'ngMaterial', 'toastr', 'lilybook.data'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .controller('LoginController', LoginController)
    .controller('HomeController', HomeController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('acmeMalarkey', acmeMalarkey);

  registerComponents();
}
