import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { Subscription } from 'rxjs/Subscription';
import { Collection } from '../../models';
import { AppService } from '../../app.service';

@Component({
  selector: 'lb-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit, OnDestroy {

  @Output() onLibraryClose = new EventEmitter();
  libraryChange: Subscription;
  routeChange: Subscription;
  collections: Collection[];

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.libraryChange = this.appService.libraryChanged.subscribe(collections => {
      this.collections = collections;
    });
    this.routeChange = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        this.onLibraryClose.emit();
      });
  }

  ngOnDestroy() {
    this.libraryChange.unsubscribe();
    this.routeChange.unsubscribe();
  }

}
