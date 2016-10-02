import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MoreComponent } from './more/more.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    SidenavComponent,
    MoreComponent,
    NavComponent,
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
