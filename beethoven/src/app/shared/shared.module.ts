import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { CompositionCardComponent } from './composition-card/composition-card.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    declarations: [
        CompositionCardComponent
    ],
    exports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        CompositionCardComponent
    ]
})
export class SharedModule { }
