import { Component, OnInit, Input } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import { Composer } from '../../core/models';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'lb-chip-composer',
  templateUrl: './chip-composer.component.html',
  styleUrls: ['./chip-composer.component.scss']
})
export class ChipComposerComponent implements OnInit {

  @Input() composer: FirebaseObjectObservable<Composer>;
  @Input() fullname: boolean;
  composerId: string;
  showComposer = false;
  showComposerLink = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    if (this.composer) {
      this.showComposer = true;
      this.composer.switchMap((composer: Composer) => {
        this.composerId = composer.$key;
        return this.dataService.hasComposerCollection(composer.$key);
      }).subscribe(hasComposerLink => {
        this.showComposerLink = hasComposerLink;
      });
    }
  }

}
