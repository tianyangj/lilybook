import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CompositionCardComponent } from './composition-card/composition-card.component';
import { CompositionThumbnailComponent } from './composition-thumbnail/composition-thumbnail.component';
import { ChipComposerComponent } from './chip-composer/chip-composer.component';
import { ChipKeyComponent } from './chip-key/chip-key.component';
import { ChipFormComponent } from './chip-form/chip-form.component';
import { ChipLevelComponent } from './chip-level/chip-level.component';
import { DialogAddCollectionComponent } from './dialog-add-collection/dialog-add-collection.component';
import { MoreIconComponent } from './more-icon/more-icon.component';
import { BookComponent } from './book/book.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule,
        FlexLayoutModule
    ],
    declarations: [
        CompositionCardComponent,
        CompositionThumbnailComponent,
        ChipComposerComponent,
        ChipKeyComponent,
        ChipFormComponent,
        ChipLevelComponent,
        DialogAddCollectionComponent,
        MoreIconComponent,
        BookComponent
    ],
    entryComponents: [
        DialogAddCollectionComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule,
        FlexLayoutModule,
        CompositionCardComponent,
        CompositionThumbnailComponent,
        ChipComposerComponent,
        ChipKeyComponent,
        ChipFormComponent,
        ChipLevelComponent,
        MoreIconComponent,
        BookComponent
    ]
})
export class SharedModule { }
