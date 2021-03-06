import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AppService } from './app.service';
import { DataService } from './data.service';
import { MemberGuard } from './services/member-guard.service';
import { NonMemberGuard } from './services/non-member-guard.service';

import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { HeaderComponent } from './layout-default/header/header.component';
import { SidenavComponent } from './layout-default/sidenav/sidenav.component';
import { NavComponent } from './layout-default/nav/nav.component';
import { SearchComponent } from './layout-default/search/search.component';
import { DialogLoginComponent } from './dialog-login/login.component';
import { DialogSignupComponent } from './dialog-signup/signup.component';
import { LibraryComponent } from './layout-default/library/library.component';
import { LibraryListItemComponent } from './layout-default/library-list-item/library-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutPopupComponent } from './layout-popup/layout-popup.component';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        AppService,
        DataService,
        MemberGuard,
        NonMemberGuard
    ],
    declarations: [
        LayoutDefaultComponent,
        HeaderComponent,
        SidenavComponent,
        NavComponent,
        SearchComponent,
        DialogLoginComponent,
        DialogSignupComponent,
        LibraryComponent,
        LibraryListItemComponent,
        PageNotFoundComponent,
        LayoutPopupComponent
    ],
    entryComponents: [
        DialogLoginComponent,
        DialogSignupComponent
    ],
})
export class CoreModule { }
