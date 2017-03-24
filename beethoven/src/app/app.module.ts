import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SplashModule } from './splash/splash.module';

import { AppComponent } from './app.component';

const firebaseConfig = {
    apiKey: 'AIzaSyADuDoy8NEkWG-P21XmTEKoWiCl1nV3eWA',
    authDomain: 'project-6379245924955471702.firebaseapp.com',
    databaseURL: 'https://project-6379245924955471702.firebaseio.com',
    storageBucket: 'project-6379245924955471702.appspot.com'
};

const firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
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
