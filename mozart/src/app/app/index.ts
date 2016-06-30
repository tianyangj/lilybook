/// <reference path="../../../typings/main.d.ts" />

import { AppComponent } from './app.component';

angular
    .module('lilybook', [
        'firebase',
        'ngAnimate',
        'ngMaterial',
        'ui.router'
    ])
    .component('lbApp', AppComponent);
