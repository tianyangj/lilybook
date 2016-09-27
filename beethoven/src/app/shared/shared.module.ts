import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconModule } from '@angular2-material/icon';
import { MdButtonModule } from '@angular2-material/button';
import { MdSidenavModule } from '@angular2-material/sidenav';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    imports: [
        CommonModule,
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdSidenavModule
    ],
    declarations: [
        HeaderComponent,
        SidenavComponent
    ],
    exports: [
        HeaderComponent,
        SidenavComponent
    ]
})
export class SharedModule { }
