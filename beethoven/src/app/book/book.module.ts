import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';

import { BookComponent } from './book.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    SharedModule,
    BookRoutingModule
  ],
  declarations: [
    BookComponent,
    HeaderComponent
  ]
})
export class BookModule { }
