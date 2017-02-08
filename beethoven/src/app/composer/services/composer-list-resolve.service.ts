import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { DataService } from '../../core/data.service';

@Injectable()
export class ComposerListResolveService implements Resolve<any> {

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getComposers().first();
  }

}
