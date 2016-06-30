/// <reference path="../../../typings/main.d.ts" />

import { AppComponent } from './app.component';
import { CommonModule } from '../common';
import { runBlock } from './app.run';

angular
    .module('lilybook', [
        'firebase',
        'ngAnimate',
        'ngMaterial',
        'ui.router',
        CommonModule
    ])
    .run(runBlock)
    .component('lbApp', AppComponent);
