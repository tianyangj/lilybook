import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { CompositionCardComponent } from './composition-card/composition-card.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MoreComponent } from './more/more.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChipComposerComponent } from './chip-composer/chip-composer.component';
import { ChipKeyComponent } from './chip-key/chip-key.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule
    ],
    declarations: [
        CompositionCardComponent,
        HeaderComponent,
        LayoutComponent,
        LoginComponent,
        MoreComponent,
        NavComponent,
        SearchComponent,
        SidenavComponent,
        ChipComposerComponent,
        ChipKeyComponent
    ],
    entryComponents: [
        LoginComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule,
        CompositionCardComponent,
        LayoutComponent,
        ChipComposerComponent,
        ChipKeyComponent
    ]
})
export class SharedModule { }
