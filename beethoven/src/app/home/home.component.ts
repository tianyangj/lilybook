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

  deleteComposition(collection, compositionId) {
    this.appService.setUserCollections(collection.$key, {
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

  moveComposition(collection, compositionId, direction) {
    let compositionIds = Object
      .keys(collection.compositions)
      .sort((x, y) => collection.compositions[x] - collection.compositions[y]);
    let index = compositionIds.indexOf(compositionId);
    let tempIndex = direction === 'up' ? index - 1 : index + 1;
    let temp = compositionIds[tempIndex];
    compositionIds[tempIndex] = compositionId;
    compositionIds[index] = temp;
    let compositions = compositionIds.reduce((prev, curr, index) => {
      prev[curr] = index;
      return prev;
    }, {});
    this.appService.setUserCollections(collection.$key, {
      name: collection.name,
      compositions: compositions
    }).subscribe();
  }

}
