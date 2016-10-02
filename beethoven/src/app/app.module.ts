import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { CoreModule } from './core/core.module';
import { SplashModule } from './splash/splash.module';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyADuDoy8NEkWG-P21XmTEKoWiCl1nV3eWA',
  authDomain: 'project-6379245924955471702.firebaseapp.com',
  databaseURL: 'https://project-6379245924955471702.firebaseio.com',
  storageBucket: 'project-6379245924955471702.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    CoreModule,
    SplashModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
