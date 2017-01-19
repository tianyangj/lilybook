import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DataService } from './data.service';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';

@NgModule({
    imports: [
        MaterialModule,
        RouterModule,
        FlexLayoutModule
    ],
    providers: [
        DataService
    ],
    declarations: [
        LayoutDefaultComponent
    ]
})
export class CoreModule { }
