import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NonMemberGuard implements CanActivate {

  constructor(
    private router: Router,
    private angularFire: AngularFire
  ) { }

  canActivate(): Observable<boolean> {
    return this.angularFire.auth.map(authState => {
      const authenticated = authState !== null;
      if (authenticated) {
        this.router.navigateByUrl('');
      }
      return !authenticated;
    });
  }

}
