import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../../core/data.service';

@Injectable()
export class ProfileResolveService implements Resolve<any>{

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getUserProfile(route.params['vanity']).map(profile => {
      if (profile) {
        return profile;
      } else {
        console.log('profile not found, redirecting...');
        //this.router.navigate(['/composer/all']);
        return false;
      }
    }).first();
  }

}
