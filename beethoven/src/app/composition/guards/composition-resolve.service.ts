import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../../core/data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Injectable()
export class CompositionResolveService implements Resolve<any> {

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.getComposition(route.params['id']).map(composition => {
      if (composition.$exists()) {
        return composition;
      } else {
        console.log('composition not found, redirecting...');
        this.router.navigate(['']);
        return false;
      }
    }).first();
  }

}
