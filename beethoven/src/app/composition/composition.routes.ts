import { Routes } from '@angular/router';
import { CompositionComponent } from './composition.component';

import { CompositionResolveService } from './guards/composition-resolve.service';

export const routes: Routes = [
    {
        path: ':id',
        component: CompositionComponent,
        resolve: {
            composition: CompositionResolveService
        }
    }
]