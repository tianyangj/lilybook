import { Routes } from '@angular/router';
import { CompositionComponent } from './composition.component';

export const routes: Routes = [
    { path: ':id', component: CompositionComponent }
]