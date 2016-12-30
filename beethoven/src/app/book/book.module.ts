import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';

import { BookComponent } from './book.component';
import { HeaderComponent } from './header/header.component';
import { BookResolveService } from './services/book-resolve.service';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    SharedModule,
    BookRoutingModule
  ],
  declarations: [
    BookComponent,
    HeaderComponent,
    ContentComponent
  ],
  providers: [
    BookResolveService
  ]
})
export class BookModule { }
