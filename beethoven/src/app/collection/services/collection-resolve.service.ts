import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../../core/data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Injectable()
export class CollectionResolveService implements Resolve<any> {

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.getCollection(route.params['id'], 24).first();
  }

}
