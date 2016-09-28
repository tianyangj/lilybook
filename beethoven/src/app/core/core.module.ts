import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MoreComponent } from './more/more.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent,
    SidenavComponent,
    MoreComponent,
    LoginComponent
  ],
  entryComponents: [
    LoginComponent
  ],
  exports: [
    HeaderComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
