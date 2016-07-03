/// <reference path="../../../typings/main.d.ts" />

import { AppComponent } from './app.component';
import { CommonModule } from '../common';
import { ComponentsModule } from '../components';
import { appConfig } from './app.config';
import { runBlock } from './app.run';

angular
    .module('lilybook', [
        'firebase',
        'ngAnimate',
        'ngMaterial',
        'ui.router',
        CommonModule,
        ComponentsModule
    ])
    .config(appConfig)
    .run(runBlock)
    .component('lbApp', AppComponent);
