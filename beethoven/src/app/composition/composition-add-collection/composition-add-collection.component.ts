import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from "@angular/material";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';

import { LoginComponent } from '../../shared/login/login.component';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'lb-composition-add-collection',
  templateUrl: './composition-add-collection.component.html',
  styleUrls: ['./composition-add-collection.component.scss']
})
export class CompositionAddCollectionComponent implements OnInit {

  constructor(
    private mdDialog: MdDialog,
    private mdSnackBar: MdSnackBar,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  add() {
    this.dataService.auth().switchMap(authState => {
      if (authState) {
        return Observable.of(authState);
      }
      return this.mdDialog.open(LoginComponent).afterClosed();
    }).switchMap(authState => {
      if (authState) {
        return this.dataService.getUserCollections(authState.uid);
      }
      return Observable.throw('Unauthenticated');
    }).take(1).subscribe(collections => {
      console.log('collections', collections);
    }, error => {
      if (error === 'Unauthenticated') {
        this.mdSnackBar.open('You must be logged in to use this feature.', 'OK', { duration: 3000 });
      }
    });
  }

}
