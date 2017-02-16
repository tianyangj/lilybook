import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SplashModule } from './splash/splash.module';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyADuDoy8NEkWG-P21XmTEKoWiCl1nV3eWA',
    authDomain: 'project-6379245924955471702.firebaseapp.com',
    databaseURL: 'https://project-6379245924955471702.firebaseio.com',
    storageBucket: 'project-6379245924955471702.appspot.com'
};

@NgModule({
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AppRoutingModule,
        CoreModule,
        SplashModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
