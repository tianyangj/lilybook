import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'composition', loadChildren: 'app/composition/composition.module#CompositionModule' }
]