import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';
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

  deleteComposition(collectionId, compositionId) {
    let collection = this.collections.find(collection => collection.$key === collectionId);
    this.appService.setUserCollections(collectionId, {
      name: collection.name,
      compositions: _.omit(collection.compositions, [compositionId])
    }).subscribe();
  }

  deleteCollection(collectionId) {
    this.appService.setUserCollections(collectionId, null).subscribe();
  }

  updateCollection(collection, collectionName) {
    if (collection.name !== collectionName) {
      this.appService.setUserCollections(collection.$key, {
        name: collectionName,
        compositions: collection.compositions
      }).subscribe();
    }
  }

}
