import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CompositionCardComponent } from './composition-card/composition-card.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        CompositionCardComponent
    ],
    exports: [
        CommonModule,
        MaterialModule,
        CompositionCardComponent
    ]
})
export class SharedModule { }
