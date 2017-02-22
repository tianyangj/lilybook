import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { DataService } from '../../core/data.service';

@Injectable()
export class HomeResolveService implements Resolve<any> {

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.auth().switchMap(authState => {
      return this.dataService.getUserCollections(authState.uid);
    }).map(collections => {
      return collections.map(collection => {
        return {
          id: collection.$key,
          name: collection.name,
          compositions$: Object.keys(collection.compositions).map(compositionId => {
            return this.dataService.getComposition(compositionId);
          })
        };
      });
    }).first();
  }

}
