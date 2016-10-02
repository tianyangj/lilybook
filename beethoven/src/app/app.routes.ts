import { Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';

export const routes: Routes = [
    { path: '', component: SplashComponent },
    { path: 'composition', loadChildren: 'app/composition/composition.module#CompositionModule' }
]