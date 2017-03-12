import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Collection } from '../core/models';
import { AppService } from '../core/app.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  collections: Collection[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.subscription = this.appService.libraryChanged.subscribe(collections => {
      this.collections = collections;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delete(collectionId, compositionId) {
    this.appService.removeCompositionFromCollection(collectionId, compositionId);
  }

}
