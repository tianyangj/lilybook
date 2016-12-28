import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookResolveService } from './services/book-resolve.service';
import { BookComponent } from './book.component';

export const routes: Routes = [
    {
        path: ':id',
        component: BookComponent,
        resolve: {
            book: BookResolveService
        }
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BookRoutingModule { }