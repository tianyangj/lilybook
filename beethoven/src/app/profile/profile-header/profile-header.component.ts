import { Component, OnInit, Input } from '@angular/core';
import { ProfileViewService } from '../services/profile-view.service';

@Component({
  selector: 'lb-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() profile: any;
  activeCollection: any;
  title: string;

  constructor(
    private viewService: ProfileViewService
  ) { }

  ngOnInit() {
    this.viewService.collection$.subscribe(collection => {
      this.activeCollection = collection;
      this.title = collection === null ? `${this.profile.user.displayName}'s Library` : collection.name;
    });
  }

}
