import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
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
