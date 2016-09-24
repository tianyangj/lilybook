import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconModule } from '@angular2-material/icon';

import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        MdToolbarModule,
        MdIconModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class SharedModule { }
