import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../../core/data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionResolveService implements Resolve<any> {

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.getCollection(route.params['id'], 24).map(collection => {
      if (collection) {
        return collection;
      } else {
        console.log('collection not found, redirecting...');
        this.router.navigate(['']);
        return false;
      }
    }).first();
  }

}
