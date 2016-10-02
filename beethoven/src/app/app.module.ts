import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SplashModule } from './splash/splash.module';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
    CoreModule,
    SplashModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
