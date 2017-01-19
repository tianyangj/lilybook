import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DataService } from './data.service';

import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { HeaderComponent } from './layout-default/header/header.component';
import { SidenavComponent } from './layout-default/sidenav/sidenav.component';
import { MoreComponent } from './layout-default/more/more.component';
import { NavComponent } from './layout-default/nav/nav.component';
import { SearchComponent } from './layout-default/search/search.component';
import { DialogLoginComponent } from './dialog-login/login.component';
import { DialogSignupComponent } from './dialog-signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule,
        FlexLayoutModule
    ],
    providers: [
        DataService
    ],
    declarations: [
        LayoutDefaultComponent,
        HeaderComponent,
        SidenavComponent,
        MoreComponent,
        NavComponent,
        SearchComponent,
        DialogLoginComponent,
        DialogSignupComponent
    ],
    entryComponents: [
        DialogLoginComponent,
        DialogSignupComponent
    ],
})
export class CoreModule { }
