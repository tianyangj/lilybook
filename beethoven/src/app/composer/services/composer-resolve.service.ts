import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { DataService } from '../../core/data.service';

@Injectable()
export class ComposerResolveService implements Resolve<any> {

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getComposer(route.params['composerId']).map(composer => {
      if (composer) {
        return composer;
      } else {
        console.log('composer not found, redirecting...');
        this.router.navigate(['/composer/all']);
        return false;
      }
    }).first();
  }

}
