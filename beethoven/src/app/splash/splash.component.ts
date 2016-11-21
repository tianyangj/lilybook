import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../core/data.service';

@Component({
  selector: 'lb-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  composers: Observable<any[]>;
  features: Observable<Observable<any>[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.composers = this.dataService.getComposers();
  }

}
