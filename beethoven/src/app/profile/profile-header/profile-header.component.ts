import { Component, OnInit, Input } from '@angular/core';
import { ProfileViewService } from '../services/profile-view.service';

@Component({
  selector: 'lb-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() profile;
  activeCollection;

  constructor(
    private viewService: ProfileViewService
  ) { }

  ngOnInit() {
    this.viewService.collection$.subscribe(collection => {
      this.activeCollection = collection;
    });
  }

}
